import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CTA from './components/CTA';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <CTA />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Academy Helper — منصة عربية لإدارة الأكاديميات الصغيرة
        </div>
      </footer>
    </div>
  );
}

export default App;
