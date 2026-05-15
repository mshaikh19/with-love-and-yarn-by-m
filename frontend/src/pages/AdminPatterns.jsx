import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminPatterns() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const patterns = [
    { id: 1, title: "The Sage Moss Cardigan", downloads: "1,402", price: "$8.00", status: "Active" },
    { id: 2, title: "Lace Petal Bookmark", downloads: "892", price: "Free", status: "Active" },
    { id: 3, title: "Winter Solstice Sweater", downloads: "0", price: "$12.00", status: "Draft" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 px-2 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Digital Patterns</h1>
            <p className="text-[#8A7080] text-[13px] font-medium">Manage your downloadable PDFs, tutorials, and pattern library.</p>
          </div>
          <Link to="/admin/patterns/new" className="bg-tertiary text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md hover:bg-tertiary/90 transition-all flex-shrink-0">
            + Upload Pattern
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map(pattern => (
            <div key={pattern.id} className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 group cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-5 bg-[#F0ECE8] relative">
                <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pattern" />
                <div className="absolute top-4 right-4">
                  {pattern.status === "Active" ? (
                    <span className="bg-white/90 backdrop-blur-sm text-[#2E7D32] px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">Active</span>
                  ) : (
                    <span className="bg-white/90 backdrop-blur-sm text-[#8A7080] px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">Draft</span>
                  )}
                </div>
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-serif text-xl text-tertiary mb-3 group-hover:text-[#6b3a4e] transition-colors">{pattern.title}</h4>
                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-[#8A7080] pt-4 border-t border-tertiary/10">
                  <span>{pattern.downloads} DLs</span>
                  <span className="text-[#6b3a4e]">{pattern.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
      <AdminFooter />
    </div>
  );
}
