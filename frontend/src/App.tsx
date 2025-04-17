import { Suspense, lazy } from 'react';
import '@/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from '@/animations/scrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/ui_components/shadn/theme-provider';
import RootLayout from './layouts/RootLayout';
import Home from '@/pages/home/page';
import NotFound from '@/pages/NotFound';
import Blog from '@/pages/blog/page';
import BlogOverview from '@/pages/blog_overview/page';

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
                <Route path="/blog" element={<BlogOverview />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/dataprotection" element={<DataProtection />} />
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
