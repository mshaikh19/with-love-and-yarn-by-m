import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';


export default function AdminDashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />

      {/* ── Main Content ── */}
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        {/* Header Section */}
        <section className="mb-10 px-2">
          <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Welcome back, M.</h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-[#8A7080] text-[13px] font-medium">Your studio is buzzing today. Here is what's happening.</p>
            <div className="flex gap-4">
              <Link to="/admin/inventory/new" className="bg-tertiary text-white px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all">
                + New Product
              </Link>
              <Link to="/admin/patterns/new" className="bg-[#FAF8F6] text-tertiary border border-tertiary/10 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all">
                + New Pattern
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F6] flex items-center justify-center text-tertiary mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-2">Monthly Revenue</h3>
            <p className="text-3xl font-serif text-tertiary mb-2">$4,820.00</p>
            <p className="text-[11px] text-[#4CAF50] font-bold flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              12% from last month
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F6] flex items-center justify-center text-tertiary mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-2">Orders Pending</h3>
            <p className="text-3xl font-serif text-tertiary mb-2">14</p>
            <p className="text-[11px] text-[#8A7080] font-medium">8 custom commissions</p>
          </div>

          {/* Card 3 (Featured Status) */}
          <div className="bg-[#FAF8F6] rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/10 relative overflow-hidden group hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-3">Studio Status</h3>
              <p className="text-2xl font-serif text-tertiary mb-3">Current Project: 'Windswept Shawl'</p>
              <p className="text-xs text-tertiary/70 font-medium leading-relaxed max-w-[200px] mb-6">
                The intricate lace pattern is 65% complete. Shipping expected Tuesday.
              </p>
              <div className="w-full h-1.5 bg-tertiary/10 rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full w-[65%]"></div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6b3a4e" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.5C91,-33.9,97.2,-17,96.8,-0.2C96.5,16.5,89.5,33,79.8,46.8C70.1,60.6,57.7,71.7,43.3,79.5C28.9,87.3,14.5,91.8,-0.4,92.5C-15.3,93.2,-30.6,90,-43.3,82.2C-56,74.4,-66.1,62,-74.6,48.1C-83.1,34.2,-90.1,17.1,-91.1,-0.6C-92.1,-18.3,-87,-36.6,-77.3,-50.2C-67.6,-63.8,-53.4,-72.7,-39.1,-79.8C-24.8,-86.9,-12.4,-92.2,1.3,-94.5C15,-96.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </section>

        {/* Main Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Creations & Charts */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Recent Creations */}
            <div>
              <div className="flex justify-between items-end mb-6 px-2">
                <h2 className="font-serif text-2xl text-tertiary">Recent Creations</h2>
                <Link to="/admin/inventory" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6b3a4e] hover:text-[#6b3a4e]/70 transition-colors border-b border-[#6b3a4e]/30 pb-0.5">View Inventory</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <Link to="/admin/inventory" className="bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 group cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-[#F0ECE8]">
                    <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cardigan" />
                  </div>
                  <div className="px-3 pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-lg text-tertiary group-hover:text-[#6b3a4e] transition-colors">Cloud Mist Cardigan</h4>
                      <span className="bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mt-1">Sold</span>
                    </div>
                    <p className="text-xs text-[#8A7080] font-medium leading-relaxed line-clamp-2">Hand-dyed alpaca wool blend. Delicate buttons and oversized fit.</p>
                  </div>
                </Link>

                <Link to="/admin/inventory" className="bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 group cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-[#F0ECE8]">
                    <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Throw" />
                  </div>
                  <div className="px-3 pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-lg text-tertiary group-hover:text-[#6b3a4e] transition-colors">Sage Garden Throw</h4>
                      <span className="bg-[#FCE4EC] text-[#C2185B] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mt-1">Active</span>
                    </div>
                    <p className="text-xs text-[#8A7080] font-medium leading-relaxed line-clamp-2">Extra chunky merino wool. Sage green with botanical texture.</p>
                  </div>
                </Link>

              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5">
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-serif text-2xl text-tertiary">Digital Patterns Performance</h2>
                <div className="flex bg-[#FAF8F6] rounded-full p-1 border border-tertiary/5">
                  <button className="px-4 py-1.5 rounded-full bg-white shadow-sm text-[9px] font-black uppercase tracking-widest text-tertiary">Weekly</button>
                  <button className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-[#8A7080] hover:text-tertiary transition-colors">Monthly</button>
                </div>
              </div>
              <div className="h-48 flex items-end justify-between gap-3 px-2">
                {[40, 60, 45, 85, 55, 70, 35].map((height, i) => (
                  <div key={i} className="w-full bg-[#E5D6DA] hover:bg-[#6b3a4e] transition-colors duration-300 rounded-t-lg relative group cursor-pointer" style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-tertiary text-white text-[10px] font-bold px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height * 2}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 px-2 text-[9px] font-black uppercase tracking-widest text-[#8A7080]">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar (Inquiries & Activity) */}
          <div className="flex flex-col gap-8">
            
            {/* Inquiries */}
            <div className="bg-[#FAF8F6] rounded-[2.5rem] p-8 border border-tertiary/5 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-2xl text-tertiary">Inquiries</h2>
                <span className="bg-[#6b3a4e] text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full shadow-sm">3 NEW</span>
              </div>
              
              <div className="flex flex-col gap-6">
                {[
                  { name: "Clara D.", time: "2h ago", text: "Wondering if you take custom color requests for the Cardigan...", icon: "✉️", color: "bg-[#FCE4EC]" },
                  { name: "James R.", time: "5h ago", text: "Question about the PDF pattern stitch count on row 42...", icon: "💬", color: "bg-[#F3E5F5]" },
                  { name: "Maya L.", time: "Yesterday", text: "Confirmed receipt of the Sage Throw. It's beautiful!", icon: "🛍️", color: "bg-[#EFEBE9]" }
                ].map((inq, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${inq.color} text-sm shadow-sm`}>{inq.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="text-[13px] font-bold text-tertiary group-hover:text-[#6b3a4e] transition-colors">{inq.name}</h5>
                        <span className="text-[8px] font-black uppercase tracking-widest text-[#8A7080]">{inq.time}</span>
                      </div>
                      <p className="text-xs text-tertiary/80 font-medium italic line-clamp-2 leading-relaxed">"{inq.text}"</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-3.5 rounded-full border border-[#6b3a4e]/20 text-[#6b3a4e] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#6b3a4e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md bg-white/50 hover:bg-[#6b3a4e]">
                Open Message Center
              </button>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5">
              <h2 className="font-serif text-2xl text-tertiary mb-8">Activity Log</h2>
              
              <div className="flex flex-col gap-6 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-tertiary/10">
                {[
                  { title: "New Order #4429", desc: "3 patterns downloaded by user@email.com", color: "bg-[#4CAF50]" },
                  { title: "Inventory Update", desc: "'Cloud Mist Cardigan' marked as Sold Out", color: "bg-[#6b3a4e]" },
                  { title: "Gallery Update", desc: "Added 4 photos to 'Process' gallery", color: "bg-[#8A7080]" }
                ].map((log, i) => (
                  <div key={i} className="relative pl-6">
                    <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-white ${log.color} shadow-sm z-10`}></div>
                    <h5 className="text-[12px] font-bold text-tertiary mb-1">{log.title}</h5>
                    <p className="text-[11px] text-[#8A7080] font-medium leading-relaxed">{log.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>

      <AdminFooter />
    </div>
  );
}
