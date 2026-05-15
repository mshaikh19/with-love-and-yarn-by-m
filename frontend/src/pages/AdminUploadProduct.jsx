import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminUploadProduct() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-2 gap-6">
          <div>
            <Link to="/admin/inventory" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-[#6b3a4e] transition-colors mb-4 inline-flex items-center gap-2">
              <span>&larr;</span> Back to Inventory
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl text-tertiary mt-2">Add New Product</h1>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3.5 rounded-full border border-tertiary/20 text-[10px] font-black uppercase tracking-[0.2em] text-tertiary hover:bg-tertiary/5 transition-colors">
              Save Draft
            </button>
            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-full bg-tertiary text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-tertiary/90 shadow-sm transition-colors">
              Publish Product
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-8">
          
          {/* Section 1: Basic Info */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Product Details</h2>
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Product Name</label>
                <input type="text" placeholder="e.g. Artisan Merino Skein - Velvet Rose" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A7080] font-medium">$</span>
                    <input type="number" placeholder="0.00" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl pl-10 pr-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Stock Level</label>
                  <input type="number" placeholder="0" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Category</label>
                  <select className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors appearance-none text-[#5C4A52]">
                    <option>Yarn</option>
                    <option>Tools</option>
                    <option>Kits</option>
                    <option>Finished Items</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Social Integration */}
          <div className="bg-gradient-to-tr from-[#FAF8F6] to-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#ee2a7b]/10">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#ee2a7b]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 7.052 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-7.052.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.355-2.617-6.783-7.052-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
               </div>
               <h2 className="font-serif text-2xl text-tertiary italic">Instagram Connection</h2>
            </div>
            <p className="text-[#8A7080] text-sm italic font-light mb-8 max-w-2xl">
               Link this product to a specific Instagram post to showcase it in the "As Seen on Instagram" gallery on the product page.
            </p>
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Instagram Post URL</label>
              <input type="text" placeholder="https://www.instagram.com/p/..." className="w-full bg-white border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#ee2a7b]/40 transition-colors" />
            </div>
          </div>

          {/* Section 3: Media */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Media & Gallery</h2>
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Product Photos</label>
              <div className="w-full border-2 border-dashed border-tertiary/20 rounded-[2rem] bg-[#FAF8F6] p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDFCFB] hover:border-[#6b3a4e]/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-[#8A7080] group-hover:text-[#6b3a4e] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-[13px] font-bold text-tertiary mb-1">Click to upload or drag and drop</p>
                <p className="text-[11px] text-[#8A7080] font-medium">SVG, PNG, JPG or GIF (max. 10MB)</p>
              </div>
            </div>
          </div>

          {/* Section 4: Description */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0_0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Product Description</h2>
            <div>
              <textarea 
                className="w-full h-48 bg-[#FAF8F6] border border-tertiary/10 rounded-2xl p-5 text-sm leading-relaxed focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors resize-none"
                placeholder="Write a beautiful description for your product..."
              ></textarea>
            </div>
          </div>

        </div>
      </main>
      <AdminFooter />
    </div>
  );
}
