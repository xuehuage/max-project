import React from 'react';

export default function Consultation() {
  return (
    <section className="py-20 px-8 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 tracking-tight">一对一方案咨询</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
            扫描右侧二维码，添加客服微信，获取您的专属留学规划方案。我们的资深导师将为您提供从院校选择到文书准备的全流程专业指导。
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-[1px] bg-[#c5a059] opacity-50"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Expert Guidance</span>
            <span className="w-8 h-[1px] bg-[#c5a059] opacity-50"></span>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#c5a059]/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-white p-4 rounded-xl shadow-lg border-4 border-white ring-1 ring-gray-100">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/images/city/max-fang.jpg" alt="WeChat QR Code" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Scan to Add WeChat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
