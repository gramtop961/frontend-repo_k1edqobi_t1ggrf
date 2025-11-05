import React from 'react';
import { Rocket, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-right md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
            <Rocket size={14} />
            <span>إدارة أكاديميتك ببساطة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            منصة عربية لإدارة الدورات، الطلاب، والمدفوعات
          </h2>
          <p className="mt-3 text-gray-600">
            تطبيق خفيف وسهل للاستخدام يحل فوضى ملفات إكسل وجروبات الواتساب. مصمم خصيصًا للأكاديميات الصغيرة.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> تتبع حالة الدفع لكل طالب</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> إعلانات ومواد لكل دورة</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> تسجيل دخول للمالك والطلاب</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-indigo-50">
              <p className="text-gray-500">عدد الدورات</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50">
              <p className="text-gray-500">طلاب مسجلون</p>
              <p className="text-2xl font-bold text-gray-900">132</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50">
              <p className="text-gray-500">مدفوعات مكتملة</p>
              <p className="text-2xl font-bold text-gray-900">76%</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50">
              <p className="text-gray-500">مواد مرفوعة</p>
              <p className="text-2xl font-bold text-gray-900">54</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
