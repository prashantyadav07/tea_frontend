import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import ShippingPolicy from '../pages/ShippingPolicy';
import Sustainability from '../pages/Sustainability';
import Blog from '../pages/Blog';

export default function AppRoutes() {
  console.log('[AppRoutes] Restoring all paths:', window.location.pathname);

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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Footer Pages */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="blog" element={<Blog />} />

        {/* Alias for terms */}
        <Route path="terms" element={<Navigate to="/terms-of-service" replace />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
