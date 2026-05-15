import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminTutorials() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const tutorials = [
    { id: 1, title: "How to crochet the Sage Moss pattern", category: "Garments", duration: "12:45", views: "3.2k", status: "Published" },
    { id: 2, title: "Choosing the right yarn for blankets", category: "Tips & Tricks", duration: "08:20", views: "1.5k", status: "Published" },
    { id: 3, title: "Invisible join method tutorial", category: "Techniques", duration: "05:10", views: "0", status: "Draft" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 px-2 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Tutorials</h1>
            <p className="text-[#8A7080] text-[13px] font-medium">Manage your educational content and video guides.</p>
          </div>
          <Link to="/admin/tutorials/new" className="bg-tertiary text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md hover:bg-tertiary/90 transition-all flex-shrink-0">
            + New Tutorial
          </Link>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FAF8F6] border-b border-tertiary/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080]">
                  <th className="p-6 font-medium">Video Title</th>
                  <th className="p-6 font-medium">Category</th>
                  <th className="p-6 font-medium">Duration</th>
                  <th className="p-6 font-medium">Views</th>
                  <th className="p-6 font-medium">Status</th>
                  <th className="p-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tertiary/5 text-[13px] text-tertiary/80 font-medium">
                {tutorials.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FAF8F6]/50 transition-colors group">
                    <td className="p-6 flex items-center gap-4">
                      <div className="w-16 h-10 rounded-lg bg-[#E5D6DA] overflow-hidden flex-shrink-0 relative flex items-center justify-center">
                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l7-5-7-5z" /></svg>
                      </div>
                      <span className="font-bold text-tertiary group-hover:text-[#6b3a4e] transition-colors line-clamp-1">{item.title}</span>
                    </td>
                    <td className="p-6">{item.category}</td>
                    <td className="p-6 text-[#8A7080]">{item.duration}</td>
                    <td className="p-6 font-bold">{item.views}</td>
                    <td className="p-6">
                      {item.status === "Published" ? (
                        <span className="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Published</span>
                      ) : (
                        <span className="bg-[#F3E5F5] text-[#8E24AA] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Draft</span>
                      )}
                    </td>
                    <td className="p-6 text-right">
                      <button className="text-[#8A7080] hover:text-[#6b3a4e] text-[10px] font-black uppercase tracking-widest border-b border-transparent hover:border-[#6b3a4e] pb-0.5 transition-all">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
      <AdminFooter />
    </div>
  );
}
