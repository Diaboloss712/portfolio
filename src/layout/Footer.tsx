import React from 'react';
import { personalInfo } from '@utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-200 py-8 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-900">
            <span className="underline underline-offset-4">
              {personalInfo.name}
            </span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Diaboloss712@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
