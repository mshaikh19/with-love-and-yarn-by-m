import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminUploadPattern() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-2 gap-6">
          <div>
            <Link to="/admin/patterns" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-[#6b3a4e] transition-colors mb-4 inline-flex items-center gap-2">
              <span>&larr;</span> Back to Patterns
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl text-tertiary mt-2">Upload New Pattern</h1>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3.5 rounded-full border border-tertiary/20 text-[10px] font-black uppercase tracking-[0.2em] text-tertiary hover:bg-tertiary/5 transition-colors">
              Save Draft
            </button>
            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-full bg-tertiary text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-tertiary/90 shadow-sm transition-colors">
              Publish
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-8">
          
          {/* Section 1: Basic Info */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Basic Information</h2>
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Pattern Title</label>
                <input type="text" placeholder="e.g. The Sage Moss Cardigan" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A7080] font-medium">$</span>
                    <input type="number" placeholder="0.00" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl pl-10 pr-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Skill Level</label>
                  <select className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors appearance-none text-[#5C4A52]">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Media & Files */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Media & Files</h2>
            <div className="flex flex-col gap-8">
              
              {/* Image Upload */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Cover Image & Gallery</label>
                <div className="w-full border-2 border-dashed border-tertiary/20 rounded-[2rem] bg-[#FAF8F6] p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDFCFB] hover:border-[#6b3a4e]/30 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-[#8A7080] group-hover:text-[#6b3a4e] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-[13px] font-bold text-tertiary mb-1">Click to upload or drag and drop</p>
                  <p className="text-[11px] text-[#8A7080] font-medium">SVG, PNG, JPG or GIF (max. 5MB)</p>
                </div>
              </div>

              {/* PDF Upload */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Digital Pattern File (PDF)</label>
                <div className="w-full border-2 border-dashed border-tertiary/20 rounded-[2rem] bg-[#FAF8F6] p-8 flex flex-col items-center justify-center text-center hover:bg-[#FDFCFB] hover:border-[#6b3a4e]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#8A7080] group-hover:text-[#6b3a4e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-[13px] font-bold text-tertiary">Select PDF Document</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Description */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Description & Details</h2>
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Full Description</label>
              <textarea 
                className="w-full h-48 bg-[#FAF8F6] border border-tertiary/10 rounded-2xl p-5 text-sm leading-relaxed focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors resize-none"
                placeholder="Write a beautiful description for your pattern..."
              ></textarea>
            </div>
            
            {/* AI Assistant Hook */}
            <div className="mt-8 bg-gradient-to-r from-[#FDF8F5] to-white border border-[#F4A261]/20 rounded-2xl p-6 md:p-8 flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(244,162,97,0.15)] flex items-center justify-center flex-shrink-0 text-[#F4A261] text-lg">✨</div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-[#D97A35] mb-2">AI Content Generator</h4>
                <p className="text-[13px] text-[#8A7080] font-medium leading-relaxed mb-4 max-w-xl">
                  Upload your images and PDF first, and the AI Assistant can automatically write a high-converting description, extract material requirements, and generate SEO tags.
                </p>
                <button className="bg-white border border-[#D97A35]/30 text-[#D97A35] px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#D97A35] hover:text-white transition-colors shadow-sm">
                  Generate with AI
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
      <AdminFooter />
    </div>
  );
}
