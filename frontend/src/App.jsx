import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Patterns from "./pages/Patterns";
import AllPatterns from "./pages/AllPatterns";
import PatternDetail from "./pages/PatternDetail";
import Tutorials from "./pages/Tutorials";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/patterns" element={<Patterns />} />
      <Route path="/all-patterns" element={<AllPatterns />} />
      <Route path="/patterns/:slug" element={<PatternDetail />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/account" element={<Auth />} />
    </Routes>
  );
}

export default App;