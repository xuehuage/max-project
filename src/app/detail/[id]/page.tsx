"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import data from "../../../data/destinations.json";
import schoolsData from "../../../data/schools.json";
import Consultation from "@/components/Consultation";

export default function DetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const pageData = (data as Record<string, any>)[id];

  // Extract region and filter schools
  const regionCode = id?.split('-')[0];
  const schools = schoolsData
    .filter(s => s.region === regionCode)
    .sort((a, b) => {
      const rankA = parseInt(String(a.qs)) || 9999;
      const rankB = parseInt(String(b.qs)) || 9999;
      return rankA - rankB;
    });

  const regionNames: Record<string, string> = {
    uk: "英国",
    au: "澳大利亚",
    singapore: "新加坡",
    ca: "加拿大",
    my: "马来西亚",
    us: "美国",
    hk: "中国香港"
  };

  if (!pageData) {
    return (
      <div className="main-container min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">内容正在建设中</h2>
        <p className="text-sm text-gray-500 mb-8">该地区的申请指南即将上线，请稍后再来。</p>
        <Link href="/" className="px-8 py-3 navy-bg text-white font-bold text-sm rounded-sm hover:opacity-90 transition-opacity">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div >
      <div className="main-container min-h-screen pb-20 bg-gray-50/50">
        {/* Header */}
        <header className="navy-bg text-white py-16 px-8 text-center relative border-b-4 gold-border">
          <Link href="/" className="absolute top-8 left-8 text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <span>&larr;</span> 返回
          </Link>
          <div className="mb-2 opacity-70 text-[10px] tracking-[0.3em] uppercase">Application Guide</div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
            {pageData.pageTitle}
          </h1>
        </header>

        {/* Sections Wrapper */}
        <div className="px-6 md:px-10 py-10 space-y-12">

          {/* Intro Section */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">简介</h2>
            </div>
            <h3 className="text-md font-bold mb-4 text-gray-800">{pageData.intro.title}</h3>
            <div className="space-y-4">
              {pageData.intro.paragraphs.map((p: string, idx: number) => (
                <p key={idx} className="text-sm text-gray-600 leading-loose text-justify">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Requirements Section */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-8 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">{pageData.requirements.title}</h2>
            </div>
            <div className="space-y-8 pl-2">
              {pageData.requirements.items.map((item: any, idx: number) => (
                <div key={idx} className="process-step">
                  <h3 className="font-bold text-sm mb-2 tracking-wide text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Materials Section */}
          <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1 h-6 gold-bg"></div>
              <h2 className="text-xl font-bold text-blue-900">{pageData.materials.title}</h2>
            </div>
            <ul className="space-y-3">
              {pageData.materials.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm border border-gray-100 hover:border-[#c5a059] transition-colors">
                  <div className="gold-text font-bold text-lg min-w-[24px] flex items-center justify-center">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-700">{item}</div>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Recommended Schools */}
          {schools.length > 0 && (
            <section className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 gold-bg"></div>
                  <h2 className="text-xl font-bold text-blue-900">
                    {regionNames[regionCode] || ""}院校排名
                  </h2>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">QS World University Rankings</span>
              </div>
              
              <div className="space-y-0 divide-y divide-gray-100">
                {schools.map((school) => (
                  <Link 
                    key={school.id} 
                    href={`/school/${school.id}`}
                    className="block py-8 first:pt-0 last:pb-0 group transition-colors hover:bg-gray-50/80 -mx-4 px-4 rounded-sm"
                  >
                    <div className="flex items-center gap-4 md:gap-8">
                      {/* Rank Number */}
                      <div className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[100px]">
                        <div className="text-3xl md:text-5xl font-bold text-orange-500 drop-shadow-sm leading-none mb-2 group-hover:scale-105 transition-transform">
                          {school.qs || "--"}
                        </div>
                        <div className="text-[9px] md:text-[10px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                          QS世界大学排名
                        </div>
                      </div>

                      {/* School Content */}
                      <div className="flex-1 flex items-center gap-4 md:gap-6 min-w-0">
                        {/* Logo */}
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-sm flex items-center justify-center p-1 border border-gray-100 flex-shrink-0 shadow-sm group-hover:border-gold/30 transition-colors">
                          {school.logo ? (
                            <img src={school.logo} alt={school.cn_name} className="max-w-full max-h-full object-contain" />
                          ) : (
                            <span className="text-lg font-bold text-blue-900">{school.cn_name.charAt(0)}</span>
                          )}
                        </div>

                        {/* Names & Description */}
                        <div className="min-w-0 pr-4">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 truncate mb-0.5 group-hover:text-blue-900 transition-colors">{school.cn_name}</h3>
                          <p className="text-[10px] md:text-xs text-gray-400 font-medium truncate mb-2 uppercase tracking-wide">{school.en_name}</p>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-1 opacity-80">
                            {school.des || `${school.cn_name}作为全球知名学府，以其卓越的教学质量和强大学术研究能力享誉全球，是众多学子的理想深造之地。`}
                          </p>
                        </div>
                      </div>

                      {/* Action Button (Desktop Only Indicator) */}
                      <div className="hidden md:flex items-center justify-center px-6 py-2.5 border border-gray-300 rounded-full text-xs font-bold text-gray-700 bg-white group-hover:border-gold group-hover:text-gold transition-all whitespace-nowrap shadow-sm">
                        查看详情 &rarr;
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
          <Consultation />
        </div>
      </div>
    </div>
  );
}
