export default function SshActivity({ items }) {
  return (
    <ul className="space-y-3">
      {(items.length ? items : [{user:'admin',time:'Just now'},{user:'faculty',time:'2 mins ago'}]).map((it, i) => (
        <li key={i} className="flex justify-between text-sm">
          <div className="capitalize">{it.user}</div>
          <div className="text-slate-400">{it.time || it.timestamp}</div>
        </li>
      ))}
    </ul>
  );
}
