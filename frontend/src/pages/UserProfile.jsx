import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('library');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-6 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Welcome, Jane</h1>
            <p className="text-[#8A7080] text-[13px] font-medium">Manage your digital library, active projects, and orders.</p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-[#C2185B] transition-colors border-b border-transparent hover:border-[#C2185B] pb-0.5">
            Log out
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Nav */}
          <div className="w-full md:w-1/4 flex flex-col gap-6 md:sticky md:top-32 h-max">
            <button 
              onClick={() => setActiveTab('library')}
              className={`text-left text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 w-max pb-1 ${activeTab === 'library' ? 'text-[#6b3a4e] border-b-2 border-[#6b3a4e]' : 'text-[#8A7080] hover:text-tertiary'}`}
            >
              Digital Library
            </button>
            <Link 
              to="/my-projects"
              className="text-left text-[11px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-tertiary transition-colors w-max"
            >
              My Projects
            </Link>
            <Link 
              to="/wishlist"
              className="text-left text-[11px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-tertiary transition-colors w-max"
            >
              Wishlist
            </Link>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`text-left text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 w-max pb-1 ${activeTab === 'orders' ? 'text-[#6b3a4e] border-b-2 border-[#6b3a4e]' : 'text-[#8A7080] hover:text-tertiary'}`}
            >
              Order History
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`text-left text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 w-max pb-1 ${activeTab === 'settings' ? 'text-[#6b3a4e] border-b-2 border-[#6b3a4e]' : 'text-[#8A7080] hover:text-tertiary'}`}
            >
              Account Settings
            </button>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            
            {/* ── DIGITAL LIBRARY ── */}
            {activeTab === 'library' && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-serif text-3xl text-tertiary mb-4">My Patterns</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Pattern 1 */}
                  <div className="bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 group">
                    <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 relative">
                      <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pattern" />
                    </div>
                    <div className="px-2 pb-2">
                      <h4 className="font-bold text-tertiary mb-4">The Sage Moss Cardigan</h4>
                      <div className="flex flex-col gap-2">
                        <button className="w-full bg-[#FAF8F6] text-tertiary py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                          Download PDF
                        </button>
                        <Link to="/tracker" className="w-full text-center bg-tertiary text-white py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm hover:bg-[#6b3a4e] transition-colors">
                          Open in Tracker
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Pattern 2 */}
                  <div className="bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 group">
                    <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 relative bg-[#F0ECE8]">
                      <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Pattern" />
                    </div>
                    <div className="px-2 pb-2">
                      <h4 className="font-bold text-tertiary mb-4">Lace Petal Bookmark</h4>
                      <div className="flex flex-col gap-2">
                        <button className="w-full bg-[#FAF8F6] text-tertiary py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                          Download PDF
                        </button>
                        <Link to="/tracker" className="w-full text-center bg-tertiary text-white py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm hover:bg-[#6b3a4e] transition-colors">
                          Open in Tracker
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── ORDER HISTORY ── */}
            {activeTab === 'orders' && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-serif text-3xl text-tertiary mb-4">Order History</h2>
                <div className="bg-white rounded-[2rem] border border-tertiary/10 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                  <table className="w-full text-left">
                    <thead className="bg-[#FAF8F6] border-b border-tertiary/5 text-[9px] font-black uppercase tracking-[0.2em] text-[#8A7080]">
                      <tr>
                        <th className="px-6 py-4">Order #</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-tertiary/5 text-[12px] font-medium text-tertiary/80">
                      <tr className="hover:bg-[#FAF8F6]/50 transition-colors">
                        <td className="px-6 py-5 font-bold text-tertiary">#WLY-4429</td>
                        <td className="px-6 py-5">Oct 12, 2023</td>
                        <td className="px-6 py-5">
                          <span className="bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Shipped</span>
                        </td>
                        <td className="px-6 py-5 text-right">$65.00</td>
                      </tr>
                      <tr className="hover:bg-[#FAF8F6]/50 transition-colors">
                        <td className="px-6 py-5 font-bold text-tertiary">#WLY-4310</td>
                        <td className="px-6 py-5">Sep 28, 2023</td>
                        <td className="px-6 py-5">
                          <span className="bg-tertiary/5 text-tertiary px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Delivered</span>
                        </td>
                        <td className="px-6 py-5 text-right">$12.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── ACCOUNT SETTINGS ── */}
            {activeTab === 'settings' && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-serif text-3xl text-tertiary mb-4">Account Settings</h2>
                <div className="bg-white rounded-[2rem] border border-tertiary/10 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52]">First Name</label>
                      <input type="text" defaultValue="Jane" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-tertiary/40" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52]">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-tertiary/40" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52]">Email Address</label>
                      <input type="email" defaultValue="jane@example.com" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-tertiary/40" />
                    </div>
                    <div className="pt-4">
                      <button className="bg-tertiary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
