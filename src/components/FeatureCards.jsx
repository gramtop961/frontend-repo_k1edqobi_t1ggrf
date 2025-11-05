import React from 'react';
import { Wallet, Users, Megaphone, FolderDown } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'المدفوعات',
    desc: 'تتبّع حالة الدفع لكل طالب في كل دورة: غير مدفوع، جزئي، مدفوع بالكامل.'
  },
  {
    icon: Users,
    title: 'إدارة الطلاب',
    desc: 'إضافة وتعديل وحذف الطلاب مع أرقام الهواتف والتسجيل في الدورات.'
  },
  {
    icon: Megaphone,
    title: 'الإعلانات',
    desc: 'نشر الإعلانات الخاصة بكل دورة مثل جداول الحصص وروابط Zoom وYouTube.'
  },
  {
    icon: FolderDown,
    title: 'المواد',
    desc: 'رفع ملفات PDF وروابط المواد لكل دورة مع وصول للطلاب المسجلين فقط.'
  }
];

export default function FeatureCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ماذا يقدم Academy Helper؟</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700"><Icon size={18} /></div>
              <h4 className="font-semibold text-gray-900">{title}</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
