import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopRibbon from '@/components/TopRibbon';

export default function MainLayout() {
  console.log('[MainLayout] Rendering, current location:', window.location.pathname);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <TopRibbon />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
