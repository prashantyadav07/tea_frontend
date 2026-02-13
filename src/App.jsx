import ScrollToTop from './components/ScrollToTop';
import AppRoutes from '@/routes/AppRoutes';

export default function App() {
  console.log('[App] Rendering with ScrollToTop');
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}
