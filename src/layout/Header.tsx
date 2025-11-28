import React, { useState } from 'react';
import { Menu, X, Github, Mail, Terminal } from 'lucide-react';
import Button from '@components/Button';
import { personalInfo, navigationItems } from '@utils/constants';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 font-bold text-lg cursor-pointer mr-8 hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-slate-950 text-white rounded-md flex items-center justify-center shadow-sm hover:bg-slate-800 transition-colors">
            <Terminal size={18} />
          </div>
          <span className="hidden sm:inline-block tracking-tight">{personalInfo.name}</span>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'text-slate-950 bg-slate-100 font-semibold' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" icon={Github} />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon" icon={Mail} />
            </a>
          </div>
        </div>

        <button 
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white animate-in slide-in-from-top">
          <div className="px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-slate-100 text-slate-950' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
