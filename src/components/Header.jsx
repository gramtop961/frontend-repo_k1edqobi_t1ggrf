import React from 'react';
import { Book, LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600">
            <Book size={20} />
          </div>
          <div>
            <h1 className="text-base font-semibold text-gray-900">Academy Helper</h1>
            <p className="text-xs text-gray-500">إدارة الدورات والطلاب بسهولة</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            <LogIn size={16} />
            <span>تسجيل الدخول</span>
          </button>
        </div>
      </div>
    </header>
  );
}
