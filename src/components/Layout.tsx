import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
