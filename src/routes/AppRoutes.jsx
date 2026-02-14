import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy-load all pages so a single broken page doesn't crash the entire app
const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Courses = lazy(() => import('../pages/Courses'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/TermsOfService'));
const ShippingPolicy = lazy(() => import('../pages/ShippingPolicy'));
const Sustainability = lazy(() => import('../pages/Sustainability'));
const Blog = lazy(() => import('../pages/Blog'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-tea-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  console.log('[AppRoutes] Current path:', window.location.pathname);

  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}
