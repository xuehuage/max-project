"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import schoolsData from "../../../data/schools.json";
import Consultation from "@/components/Consultation";

export default function SchoolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const school = schoolsData.find(s => s.id === id);

  if (!school) {
    return (
      <div className="main-container min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">院校信息未找到</h2>
        <button 
          onClick={() => router.back()} 
          className="px-8 py-3 navy-bg text-white font-bold text-sm rounded-sm hover:opacity-90 transition-opacity"
        >
          返回上一页
        </button>
      </div>
    );
  }

  // Fallback for logo: First character of name
  const FallbackLogo = () => (
    <div className="w-24 h-24 rounded-full navy-bg text-white flex items-center justify-center text-3xl font-bold border-4 border-gold shadow-lg">
      {school.cn_name.charAt(0)}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="main-container min-h-screen pb-20">
        {/* Header/Hero Section */}
        <header className="navy-bg text-white pt-16 pb-24 px-8 text-center relative overflow-hidden">
          <button 
            onClick={() => router.back()} 
            className="absolute top-8 left-8 text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors z-10"
          >
            <span>&larr;</span> 返回
          </button>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6">
              {school.logo ? (
                <div className="w-24 h-24 bg-white rounded-full p-2 flex items-center justify-center shadow-xl border-2 border-gold/50">
                  <img src={school.logo} alt={school.cn_name} className="max-w-full max-h-full object-contain" />
                </div>
              ) : (
                <FallbackLogo />
              )}
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 uppercase">
              {school.cn_name}
            </h1>
            <p className="text-white/60 text-xs md:text-sm font-light tracking-[0.2em] uppercase">
              {school.en_name}
            </p>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </header>

        {/* Stats Section */}
        <div className="px-6 -mt-10 relative z-20">
          <div className="card grid grid-cols-2 divide-x divide-gray-100 p-6 rounded-sm">
            <div className="text-center px-2">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">QS World Ranking</div>
              <div className="text-xl font-bold text-blue-900">{school.qs || 'N/A'}</div>
            </div>
            <div className="text-center px-2">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Location</div>
              <div className="text-sm font-bold text-gray-800 truncate px-2">{school.addr || 'N/A'}</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 md:px-10 py-10 space-y-8">
          
          {/* Overview */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">院校概览</h2>
            </div>
            <p className="text-sm text-gray-600 leading-loose italic">
              {school.des || "正在同步官方院校背景资料，敬请期待。作为我们的核心合作院校，该校为国际学生提供卓越的研究环境与职业发展支持。"}
            </p>
          </section>

          {/* Highlight Majors */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">王牌专业</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {school.highlight_majors.split('、').map((major: string, idx: number) => (
                <span key={idx} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-sm text-blue-900 font-medium">
                  {major.trim()}
                </span>
              ))}
            </div>
          </section>

          {/* Tuition */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">学费区间 (参考)</h2>
            </div>
            
            <div className="space-y-6">
              {Object.entries(school.tuition).map(([degree, types]: [string, any], idx: number) => (
                <div key={idx} className="border-l-2 border-gold pl-4">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    {degree}
                  </h3>
                  <div className="grid gap-3">
                    {Object.entries(types).map(([type, price]: [string, any], pIdx: number) => (
                      <div key={pIdx} className="flex justify-between items-center text-sm p-3 bg-gray-50/50 rounded-sm">
                        <span className="text-gray-500">{type}</span>
                        <span className="font-bold text-blue-900">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-[10px] text-gray-400 italic">
              * 学费数据仅供参考，每年可能根据汇率与校方政策微调，以官方录取通知书为准。
            </p>
          </section>

          <Consultation />
        </div>
      </div>
    </div>
  );
}
