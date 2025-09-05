import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#0b1220] text-slate-200 px-6 py-4 flex items-center justify-between rounded-lg shadow">
      {/* Left side - Logo / Title */}
      <div className="text-xl font-bold tracking-wide">
        SmartCampus
      </div>

      {/* Center - Links */}
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Devices</li>
        <li className="hover:text-blue-400 cursor-pointer">Ping</li>
        <li className="hover:text-blue-400 cursor-pointer">Logs</li>
      </ul>

      {/* Right side - Profile */}
      <div className="flex items-center gap-3">
        <span className="text-sm">Hello, Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=0b1220&color=fff"
          alt="profile"
          className="w-8 h-8 rounded-full border border-slate-600"
        />
      </div>
    </nav>
  );
}
