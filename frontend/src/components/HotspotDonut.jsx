import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function HotspotDonut({ allowed=70, blocked=30 }){
  const data = [{ name: 'Allowed', value: allowed }, { name: 'Blocked', value: blocked }];
  const COLORS = ['#60a5fa', '#3b82f6'];
  return (
    <div style={{height:200}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value">
            {data.map((entry, idx)=> <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
