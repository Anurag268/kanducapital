import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Admin = () => {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 🔐 AUTH CHECK
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) navigate("/admin-login");
    };
    checkUser();
  }, []);

  // 🔄 FETCH
  const fetchLeads = async () => {
    let query = supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter !== "All") {
      query = query.eq("type", filter);
    }

    const { data } = await query;
    if (data) setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, [filter]);

  // 🔍 SEARCH
  const filteredLeads = leads.filter(
    l =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search)
  );

  // 🗑️ DELETE
  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    await supabase.from("leads").delete().eq("id", id);
    fetchLeads();
  };

  // 🔄 STATUS
  const updateStatus = async (id, status) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    fetchLeads();
  };

  // 📱 WHATSAPP
  const openWhatsApp = (lead) => {
    const msg = `Hello ${lead.name}, regarding your ${lead.sub_type}`;
    window.open(`https://wa.me/91${lead.phone}?text=${encodeURIComponent(msg)}`);
  };

  // 🚪 LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  // 📊 STATS
  const total = leads.length;
  const loanCount = leads.filter(l => l.type === "Loan").length;
  const insuranceCount = leads.filter(l => l.type === "Insurance").length;
  const cardCount = leads.filter(l => l.type === "Credit Card").length;

  // 📊 CHART DATA
  const monthly = {};
  leads.forEach(l => {
    const m = new Date(l.created_at).toLocaleString("default", { month: "short" });
    monthly[m] = (monthly[m] || 0) + 1;
  });

  const chartData = Object.keys(monthly).map(m => ({
    month: m,
    leads: monthly[m]
  }));

  const pieData = [
    { name: "Loan", value: loanCount },
    { name: "Insurance", value: insuranceCount },
    { name: "Card", value: cardCount }
  ];

  const COLORS = ["#3B82F6", "#22C55E", "#FACC15"];

  // 📥 EXCEL EXPORT
  const exportExcel = () => {
    if (filteredLeads.length === 0) {
      alert("No data to export ❌");
      return;
    }

    const data = filteredLeads.map(l => ({
      Name: l.name,
      Phone: l.phone,
      Type: l.sub_type,
      Status: l.status || "Pending",
      Amount: l.amount || "",
      Date: new Date(l.created_at).toLocaleDateString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(blob, "Leads.xlsx");
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">{total}</h2>
          <p>Total Leads</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl text-center">
          <h2>{loanCount}</h2><p>Loans</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl text-center">
          <h2>{insuranceCount}</h2><p>Insurance</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <h2>{cardCount}</h2><p>Cards</p>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <h3>Monthly Leads</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="leads" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3>Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((e, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* SEARCH + EXPORT */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">

        <input
          placeholder="Search..."
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">

          <select onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
            <option value="All">All</option>
            <option value="Loan">Loan</option>
            <option value="Insurance">Insurance</option>
            <option value="Credit Card">Card</option>
          </select>

          <button
            onClick={exportExcel}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
          >
            ⬇ Export Excel
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((l) => (
              <tr key={l.id} className="border-b hover:bg-blue-50">

                <td className="p-3">{l.name}</td>
                <td className="p-3">{l.phone}</td>
                <td className="p-3">{l.sub_type}</td>

                <td className="p-3">
                  <select
                    value={l.status || "Pending"}
                    onChange={(e) => updateStatus(l.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option>Pending</option>
                    <option>Contacted</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </td>

                <td className="p-3 flex gap-2">
                  <button onClick={() => openWhatsApp(l)} className="bg-green-500 text-white px-3 py-1 rounded">
                    WhatsApp
                  </button>

                  <button onClick={() => deleteLead(l.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Admin;