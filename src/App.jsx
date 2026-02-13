import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from '@/routes/AppRoutes';

/**
 * App Component
 * 
 * Root component that wraps the entire application.
 * Provides routing configuration and global layout structure.
 */
export default function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <AppRoutes />
    </SmoothScroll>
  );
}
