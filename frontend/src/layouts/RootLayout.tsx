// src/layouts/RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer';

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
