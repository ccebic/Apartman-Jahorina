import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
   children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
   return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
};
