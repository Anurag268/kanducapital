import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
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

      if (!data.session) {
        navigate("/admin-login");
      }
    };

    checkUser();
  }, [navigate]);

  // 🔄 FETCH LEADS
  const fetchLeads = useCallback(async () => {
    let query = supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter !== "All") {
      query = query.eq("type", filter);
    }

    const { data, error } = await query;

    if (error) {
      console.log("FETCH ERROR:", error);
    } else {
      setLeads(data);
    }
  }, [filter]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // 🔍 SEARCH
  const filteredLeads = leads.filter(
    (l) =>
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search)
  );

  // 🗑️ DELETE LEAD
  const deleteLead = async (id) => {
    const confirmDelete = window.confirm("Delete this lead?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("DELETE ERROR:", error);
      alert(error.message);
    } else {
      fetchLeads();
    }
  };

  // ✅ UPDATE STATUS
  const updateStatus = async (id, status) => {
    const { data, error } = await supabase
      .from("leads")
      .update({ status: status })
      .eq("id", id)
      .select();

    if (error) {
      console.log("UPDATE ERROR:", error);
      alert(error.message);
    } else {
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id ? { ...lead, status: status } : lead
        )
      );
    }
  };

  // 📱 WHATSAPP
  const openWhatsApp = (lead) => {
    const msg = `Hello ${lead.name}, regarding your ${lead.sub_type}`;

    window.open(
      `https://wa.me/91${lead.phone}?text=${encodeURIComponent(msg)}`
    );
  };

  // 🚪 LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  // 🏠 HOME
  const goToHome = () => {
    navigate("/");
  };

  // 📊 STATS
  const total = leads.length;

  const loanCount = leads.filter((l) => l.type === "Loan").length;

  const insuranceCount = leads.filter(
    (l) => l.type === "Insurance"
  ).length;

  const cardCount = leads.filter(
    (l) => l.type === "Credit Card"
  ).length;

  // 📊 MONTHLY CHART
  const monthly = {};

  leads.forEach((l) => {
    const m = new Date(l.created_at).toLocaleString("default", {
      month: "short",
    });

    monthly[m] = (monthly[m] || 0) + 1;
  });

  const chartData = Object.keys(monthly).map((m) => ({
    month: m,
    leads: monthly[m],
  }));

  // 📊 PIE DATA
  const pieData = [
    { name: "Loan", value: loanCount },
    { name: "Insurance", value: insuranceCount },
    { name: "Card", value: cardCount },
  ];

  const COLORS = ["#3B82F6", "#22C55E", "#FACC15"];

  // 📥 EXPORT EXCEL
  const exportExcel = () => {
    if (filteredLeads.length === 0) {
      alert("No data to export ❌");
      return;
    }

    const data = filteredLeads.map((l) => ({
      Name: l.name,
      Phone: l.phone,
      Type: l.sub_type,
      Status: l.status || "Pending",
      Amount: l.amount || "",
      Date: new Date(l.created_at).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Leads"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(blob, "Leads.xlsx");
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        {/* TITLE */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Manage all leads and activities
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">

          <button
            onClick={goToHome}
            className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg font-medium shadow-sm transition"
          >
            ← Home
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium shadow transition"
          >
            Logout
          </button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">{total}</h2>
          <p>Total Leads</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl text-center">
          <h2 className="text-2xl font-bold">{loanCount}</h2>
          <p>Loans</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl text-center">
          <h2 className="text-2xl font-bold">
            {insuranceCount}
          </h2>
          <p>Insurance</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <h2 className="text-2xl font-bold">{cardCount}</h2>
          <p>Cards</p>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">

          <h3 className="font-semibold mb-3">
            Monthly Leads
          </h3>

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

          <h3 className="font-semibold mb-3">
            Distribution
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">

        <input
          type="text"
          placeholder="Search by name or phone..."
          className="p-3 border rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="All">All</option>
            <option value="Loan">Loan</option>
            <option value="Insurance">Insurance</option>
            <option value="Credit Card">Card</option>
          </select>

          <button
            onClick={exportExcel}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            ⬇ Export Excel
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px] table-fixed">

            {/* TABLE HEADER */}
            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="w-[20%] px-6 py-4 text-left font-semibold">
                  Name
                </th>

                <th className="w-[20%] px-6 py-4 text-left font-semibold">
                  Phone
                </th>

                <th className="w-[20%] px-6 py-4 text-left font-semibold">
                  Type
                </th>

                <th className="w-[20%] px-6 py-4 text-left font-semibold">
                  Status
                </th>

                <th className="w-[20%] px-6 py-4 text-center font-semibold">
                  Actions
                </th>

              </tr>

            </thead>

            {/* TABLE BODY */}
            <tbody>

              {filteredLeads.map((l, index) => (

                <tr
                  key={l.id}
                  className={`border-b hover:bg-blue-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >

                  {/* NAME */}
                  <td className="px-6 py-4 align-middle text-gray-800 font-medium break-words">
                    {l.name}
                  </td>

                  {/* PHONE */}
                  <td className="px-6 py-4 align-middle text-gray-700">
                    {l.phone}
                  </td>

                  {/* TYPE */}
                  <td className="px-6 py-4 align-middle text-gray-700">
                    {l.sub_type}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 align-middle">

                    <select
                      value={l.status || "Pending"}
                      onChange={(e) =>
                        updateStatus(l.id, e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Contacted">
                        Contacted
                      </option>

                      <option value="Approved">
                        Approved
                      </option>

                      <option value="Rejected">
                        Rejected
                      </option>

                    </select>

                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 align-middle">

                    <div className="flex items-center justify-center gap-2">

                      <button
                        onClick={() => openWhatsApp(l)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        WhatsApp
                      </button>

                      <button
                        onClick={() => deleteLead(l.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Admin;
