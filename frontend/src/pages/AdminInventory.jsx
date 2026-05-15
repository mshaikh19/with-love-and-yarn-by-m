import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminInventory() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const inventory = [
    { id: 1, name: "Artisan Merino Skein - Velvet Rose", category: "Yarn", price: 32.50, stock: 4, status: "Low Stock" },
    { id: 2, name: "Ergonomic Hook Set", category: "Tools", price: 45.00, stock: 24, status: "Active" },
    { id: 3, name: "Chunky Alpaca Blend - Sage", category: "Yarn", price: 28.00, stock: 0, status: "Sold Out" },
    { id: 4, name: "Beginner Crochet Kit", category: "Kits", price: 65.00, stock: 12, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-tertiary flex flex-col">
      <AdminNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 flex-grow w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 px-2 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-tertiary mb-3">Inventory</h1>
            <p className="text-[#8A7080] text-[13px] font-medium">Manage your physical products, yarn stock, and supplies.</p>
          </div>
          <Link to="/admin/inventory/new" className="bg-tertiary text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-md hover:bg-tertiary/90 transition-all flex-shrink-0">
            + Add Product
          </Link>
        </div>
        
        {/* Inventory Table Container */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-tertiary/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FAF8F6] border-b border-tertiary/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A7080]">
                  <th className="p-6 font-medium">Product</th>
                  <th className="p-6 font-medium">Category</th>
                  <th className="p-6 font-medium">Price</th>
                  <th className="p-6 font-medium">Stock</th>
                  <th className="p-6 font-medium">Status</th>
                  <th className="p-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tertiary/5 text-[13px] text-tertiary/80 font-medium">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FAF8F6]/50 transition-colors group">
                    <td className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-[0.8rem] bg-[#F0ECE8] overflow-hidden flex-shrink-0">
                        {item.category === "Yarn" && <img src="https://i.pinimg.com/736x/97/18/f4/9718f44a3a11a16f33b96ba7e49d4d16.jpg" className="w-full h-full object-cover" alt="Yarn" />}
                      </div>
                      <span className="font-bold text-tertiary group-hover:text-[#6b3a4e] transition-colors">{item.name}</span>
                    </td>
                    <td className="p-6">{item.category}</td>
                    <td className="p-6">${item.price.toFixed(2)}</td>
                    <td className="p-6">
                      <span className={item.stock < 5 && item.stock > 0 ? "text-[#C2185B] font-bold" : item.stock === 0 ? "text-tertiary/40" : ""}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="p-6">
                      {item.status === "Active" && <span className="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Active</span>}
                      {item.status === "Low Stock" && <span className="bg-[#FFF3E0] text-[#E65100] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Low Stock</span>}
                      {item.status === "Sold Out" && <span className="bg-[#FCE4EC] text-[#C2185B] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Sold Out</span>}
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
