import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

export default function ProjectTracker() {
  const [row, setRow] = useState(45);
  const totalRows = 120;
  const progress = Math.min(100, Math.round((row / totalRows) * 100));

  const [notes, setNotes] = useState("Modified the sleeve length to be 2 inches longer. Using a 5mm hook instead of 4.5mm to match gauge.");

  const [supplies, setSupplies] = useState([
    { id: 1, name: "Velvet Rose Yarn (3 skeins)", checked: true },
    { id: 2, name: "5.0mm Crochet Hook", checked: true },
    { id: 3, name: "Stitch Markers", checked: false },
    { id: 4, name: "Darning Needle", checked: true },
  ]);

  const toggleSupply = (id) => {
    setSupplies(supplies.map(s => s.id === id ? { ...s, checked: !s.checked } : s));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />

      <main className="flex-grow pt-32 pb-16 max-w-5xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#FCE4EC] text-[#C2185B] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">In Progress</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080]">Started Oct 12, 2024</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">The Sage Moss Cardigan</h1>
            <p className="text-[#8A7080] text-sm font-medium">Your personal workspace for this pattern.</p>
          </div>
          <Link to="/patterns/sage-moss" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6b3a4e] border border-[#6b3a4e] px-6 py-2.5 rounded-full hover:bg-[#6b3a4e] hover:text-white transition-colors">
            View Pattern PDF
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Interactive Tracker */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-tertiary/10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="font-serif text-2xl text-tertiary">Current Progress</h3>
                  <span className="text-3xl font-[Corinthia] text-[#6b3a4e]">{progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#FAF8F6] rounded-full overflow-hidden mb-12 border border-tertiary/5">
                  <div className="h-full bg-gradient-to-r from-[#8A7080] to-[#6b3a4e] rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                </div>

                {/* Counter */}
                <div className="flex flex-col items-center justify-center py-6 bg-[#FAF8F6] rounded-[2rem] border border-tertiary/5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8A7080] mb-6">Row / Round Counter</span>
                  
                  <div className="flex items-center gap-8">
                    <button 
                      onClick={() => setRow(Math.max(0, row - 1))}
                      className="w-16 h-16 rounded-full bg-white shadow-sm border border-tertiary/10 flex items-center justify-center text-3xl text-tertiary hover:border-[#6b3a4e] hover:text-[#6b3a4e] transition-colors"
                    >
                      -
                    </button>
                    
                    <div className="flex flex-col items-center min-w-[120px]">
                      <span className="text-6xl font-serif text-tertiary tabular-nums leading-none mb-2">{row}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#8A7080]">of {totalRows}</span>
                    </div>

                    <button 
                      onClick={() => setRow(Math.min(totalRows, row + 1))}
                      className="w-16 h-16 rounded-full bg-tertiary text-white shadow-md flex items-center justify-center text-3xl hover:bg-[#6b3a4e] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-tertiary/10">
              <h3 className="font-serif text-2xl text-tertiary mb-6">Project Notes</h3>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-32 bg-[#FAF8F6] border border-tertiary/10 rounded-2xl p-5 text-[13px] text-tertiary/90 leading-relaxed focus:outline-none focus:border-[#6b3a4e]/40 focus:bg-white transition-colors resize-none"
                placeholder="Jot down gauge measurements, sizing adjustments, or yarn substitutions here..."
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080] hover:text-tertiary transition-colors">
                  Save Notes
                </button>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            
            {/* Project Image */}
            <div className="bg-white rounded-[2.5rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-tertiary/10">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" alt="Project Reference" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Supplies Checklist */}
            <div className="bg-[#FAF8F6] rounded-[2.5rem] p-8 border border-tertiary/10">
              <h3 className="font-serif text-2xl text-tertiary mb-6">Supplies Checklist</h3>
              <div className="flex flex-col gap-4">
                {supplies.map(supply => (
                  <label key={supply.id} className="flex items-center gap-4 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${supply.checked ? 'bg-tertiary border-tertiary text-white' : 'border-tertiary/30 bg-white group-hover:border-tertiary'}`}>
                      {supply.checked && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className={`text-[13px] font-medium transition-colors ${supply.checked ? 'text-tertiary/50 line-through' : 'text-tertiary'}`}>
                      {supply.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
