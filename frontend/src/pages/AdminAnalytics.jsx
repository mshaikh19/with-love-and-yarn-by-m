import React, { useEffect } from 'react';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminAnalytics() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 px-2 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Analytics</h1>
            <p className="text-[#8A7080] text-[13px] font-medium">Deep dive into your studio's performance, traffic, and sales.</p>
          </div>
          <div className="flex bg-white rounded-full p-1 border border-tertiary/10 shadow-sm">
            <button className="px-6 py-2 rounded-full bg-[#FAF8F6] text-[10px] font-black uppercase tracking-widest text-tertiary">30 Days</button>
            <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">90 Days</button>
            <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">All Time</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Chart (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Gross Revenue</h2>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[30, 45, 25, 60, 80, 50, 95, 75, 40, 65, 85, 100].map((height, i) => (
                <div key={i} className="w-full bg-[#E5D6DA] hover:bg-[#6b3a4e] transition-colors duration-300 rounded-t-md relative group cursor-pointer" style={{ height: `${height}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-tertiary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    ${height * 42}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2 text-[9px] font-black uppercase tracking-widest text-[#8A7080]">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>

          {/* Top Traffic Sources */}
          <div className="bg-[#FAF8F6] rounded-[2.5rem] p-8 border border-tertiary/5 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Traffic Sources</h2>
            <div className="flex flex-col gap-6">
              {[
                { source: "Instagram", value: "45%", color: "bg-[#E91E63]" },
                { source: "Pinterest", value: "35%", color: "bg-[#E60023]" },
                { source: "Direct Traffic", value: "15%", color: "bg-[#6b3a4e]" },
                { source: "Organic Search", value: "5%", color: "bg-[#8A7080]" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-tertiary mb-2">
                    <span>{item.source}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="w-full h-2 bg-tertiary/10 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>
      <AdminFooter />
    </div>
  );
}
