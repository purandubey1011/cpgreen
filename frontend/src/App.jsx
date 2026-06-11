import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Plans from './components/Plans/Plans.jsx';
import Amenities from './components/Amenities/Amenities.jsx';
import Loader from './components/common/Loader.jsx';
import Navbar from './components/common/Navbar.jsx';
import { useGsapAnimations } from './hooks/useGsapAnimations.js';
import { useLenisScroll } from './hooks/useLenisScroll.js';

const App = () => {
  const location = useLocation();

  useLenisScroll();
  useGsapAnimations(location.pathname);

  return (
    <main className="overflow-x-hidden bg-[#f3f3f3]">
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
