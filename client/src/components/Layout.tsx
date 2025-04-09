import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4 flex-grow-1" style={{ minHeight: '100vh' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
