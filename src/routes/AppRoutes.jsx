import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetails from '@/pages/ProductDetails';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Courses from '@/pages/Courses';
import Cart from '@/pages/Cart';
import NotFound from '@/pages/NotFound';


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
