import React, { useEffect, useState } from "react";
import api from "../api/api";
import DeviceCard from "../components/DeviceCard";
import PingBar from "../components/PingBar";
import SshActivity from "../components/SshActivity";
import VlanList from "../components/VlanList";
import HotspotDonut from "../components/HotspotDonut";

export default function Dashboard(){
  const [devices, setDevices] = useState([]);
  const [pingStats, setPingStats] = useState({ success: 0, failed: 0 });
  const [ssh, setSsh] = useState([]);
  const [vlans, setVlans] = useState([]);
  const [hotspot] = useState({ allowed: 70, blocked: 30 });


  useEffect(() => {
    fetchAll();
    const t = setInterval(fetchAll, 30*1000); // refresh
    return () => clearInterval(t);
  }, []);

  async function fetchAll(){
    try {
      const [r1, r2, r3, r4] = await Promise.all([
        api.get("/devices"),
        api.get("/ping/stats").catch(()=>({data:{success:7,failed:3}})),
        api.get("/ssh/recent").catch(()=>({data:[]})),
        api.get("/vlans").catch(()=>({data:[]}))
      ]);
      setDevices(r1.data || []);
      setPingStats(r2.data || {success:7,failed:3});
      setSsh(r3.data || []);
      setVlans(r4.data || []);
    } catch(err){
      console.error(err);
    }
  }

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-semibold text-white text-center">Smart Campus Network Monitoring Dashboard</h1>
      </header>

      <nav className="my-4">
        <ul className="flex gap-6 justify-center text-slate-300">
          <li>Home</li><li>Devices</li><li>Ping</li><li>Logs</li>
        </ul>
      </nav>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <div className="p-4 rounded-lg bg-[#0b1220]">
            <h2 className="text-xl mb-3">Devices</h2>
            <div className="space-y-3">
              {devices.slice(0,5).map(d => <DeviceCard key={d._id} device={d} />)}
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="p-4 rounded-lg bg-[#0b1220]">
            <h2 className="text-xl mb-3">Ping Status</h2>
            <PingBar label="Success" value={pingStats.success} />
            <PingBar label="Failed" value={pingStats.failed} />
          </div>

          <div className="mt-4 p-4 rounded-lg bg-[#0b1220]">
            <VlanList vlans={vlans} />
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="p-4 rounded-lg bg-[#0b1220]">
            <h2 className="text-xl mb-3">SSH Activity</h2>
            <SshActivity items={ssh} />
          </div>

          <div className="mt-4 p-4 rounded-lg bg-[#0b1220]">
            <h2 className="text-xl mb-3">Hotspot Logs</h2>
            <HotspotDonut allowed={hotspot.allowed} blocked={hotspot.blocked} />
          </div>
        </div>
      </div>
    </div>
  );
}
