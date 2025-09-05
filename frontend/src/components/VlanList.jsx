export default function VlanList({ vlans = [] }){
  const data = vlans.length ? vlans : [
    { vlanId: 10, name: 'Admin', usedPercent: 70 },
    { vlanId: 20, name: 'Faculty', usedPercent: 50 },
    { vlanId: 30, name: 'Students', usedPercent: 60 },
  ];

  return (
    <div>
      <h3 className="text-lg mb-3">VLAN Utilization</h3>
      <div className="space-y-3">
        {data.map(v => (
          <div key={v.vlanId} className="flex items-center justify-between">
            <div>
              <div className="text-sm">VLAN {v.vlanId}</div>
              <div className="text-xs text-slate-400">{v.name}</div>
            </div>
            <div className="w-2/5">
              <div className="w-full bg-slate-800 h-3 rounded">
                <div style={{width:`${v.usedPercent}%`}} className="h-3 rounded bg-[var(--accent)]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
