export default function DeviceCard({ device }){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${device.status==='online' ? 'bg-green-400' : 'bg-red-500'}`}></span>
        <div>
          <div className="text-sm">{device.ip}</div>
          <div className="text-xs text-slate-400">{device.name || device.type}</div>
        </div>
      </div>
      <div className="text-sm text-slate-300">{device.status}</div>
    </div>
  );
}
