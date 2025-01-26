import { Suspense, lazy } from 'react';
import '@/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from '@/animations/scrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/ui_components/shadn/theme-provider';
import RootLayout from './layouts/RootLayout';
import Home from '@/pages/home/page';
import Blog from '@/pages/blog/page';
import About from '@/pages/about/page';
import Contact from '@/pages/contact/page';
import NotFound from '@/pages/NotFound';

const Work = lazy(() => import('@/pages/work/page'));
const Admin = lazy(() => import('@/pages/admin'));
const Blogarticle = lazy(() => import('@/pages/blogarticle/page'));
const Imprint = lazy(() => import('@/pages/imprint/page'));
const DataProtection = lazy(() => import('@/pages/dataProtection/page'));

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="w-screen h-[200vh] flex justify-center items-center text-4xl bg-pageAnimationGray overflow-hidden"></div>
            }
          >
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogId" element={<Blogarticle />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/dataprotection" element={<DataProtection />} />
                <Route path="/admin" element={<Admin />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
