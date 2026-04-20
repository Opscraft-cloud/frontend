import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const dummyData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
  { name: "Jul", value: 900 },
  { name: "Aug", value: 600 },
  { name: "Sep", value: 800 },
  { name: "Oct", value: 1000 },
  { name: "Nov", value: 750 },
  { name: "Dec", value: 850 },
]

export function LineGraph() {
  return (
    <div className="w-full h-96 p-4">
      <h2 className="text-2xl font-bold mb-4">Monthly Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ fill: "#8884d8" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}