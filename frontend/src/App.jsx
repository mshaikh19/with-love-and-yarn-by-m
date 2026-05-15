import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/common/PageWrapper';
import BackToTop from './components/common/BackToTop';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Patterns from "./pages/Patterns";
import AllPatterns from "./pages/AllPatterns";
import PatternDetail from "./pages/PatternDetail";
import Tutorials from "./pages/Tutorials";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import AdminInventory from "./pages/AdminInventory";
import AdminUploadProduct from "./pages/AdminUploadProduct";
import AdminPatterns from "./pages/AdminPatterns";
import AdminUploadPattern from "./pages/AdminUploadPattern";
import AdminTutorials from "./pages/AdminTutorials";
import AdminUploadTutorial from "./pages/AdminUploadTutorial";
import AdminAnalytics from "./pages/AdminAnalytics";
import ProjectTracker from "./pages/ProjectTracker";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Success from "./pages/Success";
import Wishlist from "./pages/Wishlist";
import MyProjects from "./pages/MyProjects";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#FDFCFB',
            color: '#4A3840',
            padding: '16px 24px',
            borderRadius: '9999px',
            boxShadow: '0 10px 40px -10px rgba(107,58,78,0.15)',
            border: '1px solid rgba(107,58,78,0.05)',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.02em',
          },
          success: {
            iconTheme: { primary: '#6b3a4e', secondary: '#FDFCFB' },
          },
        }}
      />
      <BackToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
          <Route path="/shop/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
          <Route path="/patterns" element={<PageWrapper><Patterns /></PageWrapper>} />
          <Route path="/all-patterns" element={<PageWrapper><AllPatterns /></PageWrapper>} />
          <Route path="/patterns/:slug" element={<PageWrapper><PatternDetail /></PageWrapper>} />
          <Route path="/tutorials" element={<PageWrapper><Tutorials /></PageWrapper>} />
          <Route path="/account" element={<PageWrapper><Auth /></PageWrapper>} />
          <Route path="/profile" element={<PageWrapper><UserProfile /></PageWrapper>} />
          <Route path="/tracker" element={<PageWrapper><ProjectTracker /></PageWrapper>} />
          <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
          <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
          <Route path="/success" element={<PageWrapper><Success /></PageWrapper>} />
          <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
          <Route path="/my-projects" element={<PageWrapper><MyProjects /></PageWrapper>} />

          <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
          <Route path="/admin/inventory" element={<PageWrapper><AdminInventory /></PageWrapper>} />
          <Route path="/admin/inventory/new" element={<PageWrapper><AdminUploadProduct /></PageWrapper>} />
          <Route path="/admin/patterns" element={<PageWrapper><AdminPatterns /></PageWrapper>} />
          <Route path="/admin/patterns/new" element={<PageWrapper><AdminUploadPattern /></PageWrapper>} />
          <Route path="/admin/tutorials" element={<PageWrapper><AdminTutorials /></PageWrapper>} />
          <Route path="/admin/tutorials/new" element={<PageWrapper><AdminUploadTutorial /></PageWrapper>} />
          <Route path="/admin/analytics" element={<PageWrapper><AdminAnalytics /></PageWrapper>} />

          {/* 404 Catch All */}
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;