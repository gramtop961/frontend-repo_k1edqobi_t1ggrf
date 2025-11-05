import React from 'react';

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
        <h3 className="text-2xl font-bold">جاهز تبدأ؟</h3>
        <p className="mt-2 text-white/90">
          سجّل الآن وابدأ في تنظيم الأكاديمية خلال دقائق. تجربة مبسطة مناسبة للموبايل أولاً.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-700 px-5 py-2.5 font-semibold hover:bg-white/90 transition"
          >
            إنشاء حساب للمالك
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500/20 text-white border border-white/30 px-5 py-2.5 font-semibold hover:bg-indigo-500/30 transition"
          >
            دخول الطالب
          </a>
        </div>
      </div>
    </section>
  );
}
