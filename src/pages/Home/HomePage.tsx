import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturedSection from './FeaturedSection';

interface HomePageProps {
  onNavigate: (tab: string, projectId?: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24">
      <HeroSection onNavigate={onNavigate} />
      <AboutSection />
      <FeaturedSection onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
