
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const EMICalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(10.75);
  const [tenure, setTenure] = useState(12);

  const monthlyRate = rate / 12 / 100;

  const emi =
    amount && rate && tenure
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1)
      : 0;

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const data = [
    { name: "Principal", value: amount },
    { name: "Interest", value: totalInterest }
  ];

  const COLORS = ["#2563EB", "#FACC15"]; // blue + yellow

  return (
    <div className="mt-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <FaCalculator className="text-2xl text-blue-600" />
        <h2 className="text-2xl font-bold">EMI Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* INPUT SECTION */}
        <div className="space-y-6">

          {/* AMOUNT */}
          <div>
            <label className="font-medium">Loan Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-2 border rounded mt-1"
            />
            <input
              type="range"
              min="10000"
              max="1000000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          {/* RATE */}
          <div>
            <label className="font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              step="0.1"
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full p-2 border rounded mt-1"
            />
            <input
              type="range"
              min="5"
              max="25"
              step="0.25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          {/* TENURE */}
          <div>
            <label className="font-medium">Tenure (Months)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full p-2 border rounded mt-1"
            />
            <input
              type="range"
              min="6"
              max="60"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

        </div>

        {/* RESULT + CHART */}
        <div className="flex flex-col items-center">

          {/* EMI RESULT */}
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center w-full shadow-lg">
            <p className="text-lg">Monthly EMI</p>
            <h1 className="text-4xl font-bold mt-2">
              ₹ {emi.toFixed(0)}
            </h1>
          </div>

          {/* BREAKDOWN */}
          <div className="mt-6 w-full bg-gray-100 rounded-xl p-4 text-center">
            <p className="text-gray-600">Total Interest</p>
            <h3 className="font-bold text-lg text-yellow-600">
              ₹ {totalInterest.toFixed(0)}
            </h3>

            <p className="text-gray-600 mt-2">Total Payment</p>
            <h3 className="font-bold text-lg text-blue-600">
              ₹ {totalPayment.toFixed(0)}
            </h3>
          </div>

          {/* PIE CHART */}
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

        </div>

      </div>
    </div>
  );
};

export default EMICalculator;