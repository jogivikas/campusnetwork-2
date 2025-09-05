export default function PingBar({ label, value }){
  const percent = Math.max(0, Math.min(100, value)); // assume value is percent
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <div>{label}</div>
        <div>{value}</div>
      </div>
      <div className="w-full bg-slate-800 h-4 rounded">
        <div style={{width:`${percent}%`}} className="h-4 rounded bg-[var(--accent)]"></div>
      </div>
    </div>
  );
}
