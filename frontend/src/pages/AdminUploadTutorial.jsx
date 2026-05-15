import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminUploadTutorial() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-2 gap-6">
          <div>
            <Link to="/admin/tutorials" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-[#6b3a4e] transition-colors mb-4 inline-flex items-center gap-2">
              <span>&larr;</span> Back to Tutorials
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl text-tertiary mt-2">Publish New Tutorial</h1>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3.5 rounded-full border border-tertiary/20 text-[10px] font-black uppercase tracking-[0.2em] text-tertiary hover:bg-tertiary/5 transition-colors">
              Save Draft
            </button>
            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-full bg-tertiary text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-tertiary/90 shadow-sm transition-colors">
              Publish Video
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-8">
          
          {/* Section 1: Video Details */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Video Details</h2>
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Tutorial Title</label>
                <input type="text" placeholder="e.g. How to crochet the Sage Moss pattern" className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
              </div>
              
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Video URL (YouTube / Vimeo)</label>
                <input type="url" placeholder="https://youtube.com/watch?v=..." className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Category</label>
                  <select className="w-full bg-[#FAF8F6] border border-tertiary/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors appearance-none text-[#5C4A52]">
                    <option>Garments</option>
                    <option>Techniques</option>
                    <option>Tips & Tricks</option>
                  </select>
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

          {/* Section 2: Notes & Materials */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-tertiary/5">
            <h2 className="font-serif text-2xl text-tertiary mb-8">Description & Timestamps</h2>
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5C4A52] mb-3 block">Video Description / Blog Post</label>
              <textarea 
                className="w-full h-48 bg-[#FAF8F6] border border-tertiary/10 rounded-2xl p-5 text-sm leading-relaxed focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors resize-none"
                placeholder="Write accompanying notes, materials needed, or timestamps for your video..."
              ></textarea>
            </div>
            
            {/* AI Assistant Hook */}
            <div className="mt-8 bg-gradient-to-r from-[#FDF8F5] to-white border border-[#F4A261]/20 rounded-2xl p-6 md:p-8 flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(244,162,97,0.15)] flex items-center justify-center flex-shrink-0 text-[#F4A261] text-lg">✨</div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-[#D97A35] mb-2">AI Transcript & Chapters</h4>
                <p className="text-[13px] text-[#8A7080] font-medium leading-relaxed mb-4 max-w-xl">
                  Paste your YouTube link above, and the AI Assistant can automatically fetch the transcript, generate smart chapter timestamps, and write a summary.
                </p>
                <button className="bg-white border border-[#D97A35]/30 text-[#D97A35] px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#D97A35] hover:text-white transition-colors shadow-sm">
                  Generate Chapters
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
