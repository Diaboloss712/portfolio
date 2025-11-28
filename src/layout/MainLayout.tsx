import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeTab, onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-950 font-sans antialiased selection:bg-slate-200">
      <Header activeTab={activeTab} onNavigate={onNavigate} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 min-h-[calc(100vh-140px)]">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
