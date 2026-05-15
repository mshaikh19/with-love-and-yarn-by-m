import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function MyProjects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projects = [
    { 
      id: 1, 
      title: "The Sage Moss Cardigan", 
      progress: 45, 
      status: "In Progress", 
      lastActive: "2 days ago",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" 
    },
    { 
      id: 2, 
      title: "Cloud Mist Beanie", 
      progress: 90, 
      status: "Nearly Done", 
      lastActive: "Today",
      image: "https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-6 w-full">
        
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-tertiary mb-4">My Projects</h1>
            <p className="text-[#8A7080] text-sm font-medium tracking-wide">Tracking your creative journey, stitch by stitch.</p>
          </div>
          <Link to="/patterns" className="bg-tertiary text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
            + Start New Project
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[3rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-tertiary/5 flex gap-6 items-center group"
            >
              <div className="w-32 h-40 rounded-[2rem] overflow-hidden flex-shrink-0">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={project.title} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#8A7080]">{project.status}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#8A7080]/40">{project.lastActive}</span>
                </div>
                <h3 className="font-serif text-2xl text-tertiary mb-4 truncate">{project.title}</h3>
                
                {/* Progress Mini Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span>Progress</span>
                    <span className="text-[#6b3a4e]">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF8F6] rounded-full overflow-hidden border border-tertiary/5">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <Link 
                  to="/tracker" 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#6b3a4e] group-hover:gap-3 transition-all"
                >
                  Open Workspace
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
