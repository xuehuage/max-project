"use client";

import { useState } from "react";
import Link from "next/link";
import schoolsData from "../data/schools.json";
// Swiper Imports
import Consultation from "@/components/Consultation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const destinations = [
    {
      id: "singapore",
      emoji: "🇸🇬",
      name: "新加坡 · Singapore",
      tag: "顶尖公立院校",
      desc: "公立大学亚洲顶尖，双语衔接顺畅，提供 1-2 年极佳工签利好，就业市场认可度极高。",
      labels: ["双语衔接", "工签利好", "高就业率"],
      img: "/images/city/Singapore.jpeg",
    },
    {
      id: "uk",
      emoji: "🇬🇧",
      name: "英国 · United Kingdom",
      tag: "经典精英教育",
      desc: "三年制本科认可度极高，名校林立且工签政策优越，文化底蕴深厚，回国及留英就业竞争力强。",
      labels: ["高效学制", "名校云集", "职场高亮"],
      img: "/images/city/UK.jpeg",
    },
    {
      id: "us",
      emoji: "🇺🇸",
      name: "美国 · United States",
      tag: "全球科研高地",
      desc: "世界级顶尖名校云集，讲求通识教育，毕业后提供 OPT 长期工签利好就业，开启全球视野。",
      labels: ["通识教育", "OPT工签", "科研霸主"],
      img: "/images/city/USA.jpeg",
    },
    {
      id: "hk",
      emoji: "🇭🇰",
      name: "中国香港 · Hong Kong",
      tag: "国际金融窗口",
      desc: "享受世界顶尖学历教育，中西交融，留学性价比高，留港及大湾区就业机会极多。",
      labels: ["高性价比", "IANG签证", "中西贯通"],
      img: "/images/city/hongkong.jpeg",
    },
    {
      id: "au",
      emoji: "🇦🇺",
      name: "澳大利亚 · Australia",
      tag: "优质教育资源",
      desc: "优质教育全球公认，环境多元包容，宽松工签政策利好，提供极其丰富的就业与留学体验。",
      labels: ["多元文化", "工签利好", "移民通道"],
      img: "/images/city/Australia.jpeg",
    },
    {
      id: "ca",
      emoji: "🇨🇦",
      name: "加拿大 · Canada",
      tag: "安全宜居首选",
      desc: "教育水平全球领先且性价比高，安全宜居。毕业工签政策极其友好，助力长期职业规划与移民意向。",
      labels: ["毕业工签", "高性价比", "环境优美"],
      img: "/images/city/Canada.jpeg",
    },
    {
      id: "my",
      emoji: "🇲🇾",
      name: "马来西亚 · Malaysia",
      tag: "高性价比枢纽",
      desc: "留学性价比首选，提供欧美名校双联课程，学历国际认可度极高，是通往全球名校的理想跳板。",
      labels: ["双联课程", "成本极低", "全英文教学"],
      img: "/images/city/Malaysia.jpeg",
    },
  ];

  const partners = schoolsData
    .filter(s => s.logo && (s as any).is_featured)
    .map(s => ({
      id: s.id,
      name: s.cn_name || s.en_name,
      img: s.logo || ""
    }));

  const faqs = [
    {
      q: "真的没有隐形收费和乱收费吗？",
      a: "是的。迈科斯在校内推荐合同中明确公示了收费明细。所有的第三方费用均由家长直接支付。迈科斯仅收取合同约定的服务费，且在校方监督下执行。",
    },
    {
      q: "我的孩子成绩一般，能申请到好学校吗？",
      a: "成绩仅是维度之一。迈科斯擅长通过“背景对冲策略”，匹配合适的科研、竞赛项目，帮助学生构建差异化竞争力。以往案例中，我们曾多次协助普通学子成功进入 QS 百强名校。",
    },
    {
      q: "现在的国际环境，留学还安全吗？",
      a: "安全是核心底线。我们会重点推荐新加坡、香港、澳大利亚等安全系数极高的地区，并提供行前安全培训及海外紧急联络保障，全程护航学子安全。",
    },
    {
      q: "什么时候开始规划最合适？",
      a: "教育规划宜早不宜迟。建议提前 12-18 个月介入。早期规划可以更从容地安排语言提升与背景积累，从而锁定更高层级的院校席位。",
    },
  ];

  const offers = [
    { title: "The University of Manchester", img: "/images/offers/offer1.jpeg" },
    { title: "KCL", img: "/images/offers/offer2.jpeg" },
    { title: "University of Warwick", img: "/images/offers/offer3.jpeg" },
    { title: "The University of Manchester", img: "/images/offers/offer4.jpeg" },
    { title: "The University of Melbourne", img: "/images/offers/offer5.jpeg" },
    { title: "University College London", img: "/images/offers/offer6.jpeg" },
    { title: "The Ohio State University", img: "/images/offers/offer7.jpeg" },
    { title: "Lingnan University", img: "/images/offers/offer8.jpeg" },
  ];

  return (
    <div >
      <div className="main-container min-h-screen">
        {/* Header */}
        <header className="navy-bg text-white py-24 px-8 text-center">
          <div className="mb-4 opacity-70 text-xs tracking-[0.4em] uppercase">Excellence in Global Education</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider text-white">成都迈科斯国际教育</h1>
          <p className="gold-text text-sm md:text-base mb-12 text-left indent-[2em] leading-relaxed max-w-3xl mx-auto">成都迈科斯国际教育深耕全球名校申请，致力于为学子提供一站式、定制化的专业留学服务，业务涵盖背景提升、名校规划、文书指导等核心领域。作为迈科斯官方唯一授权门户，我们实时同步官方课程动态与留学资讯，由资深顾问团队为您提供精准、前瞻的海外升学解决方案。</p>
          <div className="inline-block py-2 px-8 border border-white/30 text-xs tracking-[0.2em] bg-white/5 uppercase">
            2026 校内推荐官方公示页面
          </div>
        </header>

        {/* Stats */}
        <section className="px-6 -mt-12">
          <div className="card p-6 text-center rounded-sm">
            <div className="grid grid-cols-3 gap-4">
              <div className="group">
                <div className="text-xl md:text-2xl font-bold mb-1 group-hover:scale-110 transition-transform tracking-tight text-blue-900">专业 </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest scale-90 text-center">学术规划</div>
              </div>
              <div className="border-x border-gray-100 group">
                <div className="text-xl md:text-2xl font-bold mb-1 group-hover:scale-110 transition-transform tracking-tight text-blue-900">安全</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest scale-90 text-center">全程护航</div>
              </div>
              <div className="group">
                <div className="text-xl md:text-2xl font-bold mb-1 group-hover:scale-110 transition-transform tracking-tight text-blue-900">可靠</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest scale-90 text-center">规范透明</div>
              </div>
            </div>
          </div>
        </section>

        {/* Destination Details */}
        <section className="py-20 px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">选择您的学术目的地</h2>
            <p className="text-xs text-gray-400 italic">Global Academic Horizons</p>
            <div className="divider"></div>
          </div>

          <div className="space-y-12">
            {destinations.map((dest, idx) => (
              <div key={idx} className="destination-item">
                <div className="dest-image-wrapper h-[200px]">
                  {dest.img ? (
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-navy flex items-center justify-center text-white/20 text-xs italic text-center px-4">
                      [已预留图片位置: {dest.name}]
                    </div>
                  )}
                </div>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl font-bold">{dest.emoji} {dest.name}</h3>
                  <span className="text-[10px] gold-text font-bold tracking-widest">{dest.tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-loose mb-4">
                  {dest.desc}
                </p>
                <div className="flex gap-2 pb-4">
                  {dest.labels.map((label, lIdx) => (
                    <span key={lIdx} className="text-[10px] border px-2 py-1 text-gray-400">{label}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {dest.id === "us" || dest.id === "hk" ? (
                    <div className="flex-1 text-center py-3 bg-gray-50 text-gray-400 text-sm font-bold rounded-sm tracking-wider border border-gray-200 border-dashed cursor-default">
                      Case by Case · 详情请咨询
                    </div>
                  ) : (
                    <>
                      <Link href={`/detail/${dest.id}-ug`} className="flex-1 text-center py-3 navy-bg text-white text-sm font-bold rounded-sm hover:opacity-90 transition-opacity">
                        本科申请详情
                      </Link>
                      <Link href={`/detail/${dest.id}-pg`} className="flex-1 text-center py-3 border border-blue-900 text-blue-900 text-sm font-bold rounded-sm hover:bg-gray-50 transition-colors">
                        硕士申请详情
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Institutions */}
        <section className="py-20 bg-gray-50 px-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">全球合作伙伴</h2>
            <p className="text-xs text-gray-400 italic">Institutional Partners & Global Reach</p>
            <div className="divider"></div>
          </div>

          <div className="px-4">
            <Swiper
              modules={[Grid, Pagination]}
              slidesPerView={3}
              grid={{
                rows: 2,
                fill: 'row'
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
                el: '.partner-pagination',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  grid: { rows: 2 }
                },
                768: {
                  slidesPerView: 5,
                  grid: { rows: 2 }
                }
              }}
              className="partner-swiper pb-12"
            >
              {partners.map((partner, idx) => (
                <SwiperSlide key={idx}>
                  <Link href={`/school/${partner.id}`} className="flex flex-col items-center gap-3 py-2 cursor-pointer group">
                    <div className="partner-logo shrink-0 group-hover:border-gold group-hover:-translate-y-1 transition-all">
                      <img src={partner.img} alt={partner.name} className="max-w-[75%] max-h-[75%] object-contain" />
                    </div>
                    <span className="text-xs text-gray-600 font-bold text-center leading-tight px-1 group-hover:text-gold transition-colors">
                      {partner.name}
                    </span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="partner-pagination flex justify-center mt-6"></div>
          </div>

          <p className="text-center text-[10px] text-gray-400 mt-8 italic">与各区域多所院校建立深度学术协作关系</p>
        </section>

        {/* Transparency System */}
        <section className="px-10 py-20 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-2 text-blue-900"> 规范透明</h2>
            <div className="divider"></div>
          </div>
          <div className="space-y-12">
            {[
              { id: "01", title: "价格透明 · 严禁乱收费", desc: "签约即确定全流程服务费用。严禁收取任何形式的隐藏渠道费。所有第三方官方规费均由家长直接缴纳。" },
              { id: "02", title: "标准合同 · 法律级监管", desc: "执行教育部核准的标准合同。专项合规监管，确保退费保障与服务标准严格对等。" },
              { id: "03", title: "服务过程 · 阳光化作业", desc: "建立专属进度查阅群。文书草案、网申记录、官方回执等关键信息全同步，家长享有全过程知情权与监督权。" },
            ].map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="w-10 h-10 navy-bg text-white rounded-sm flex-shrink-0 flex items-center justify-center font-bold mr-6 text-sm">{item.id}</div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offer Gallery - Swiper Implementation */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="px-10 text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">最新录取</h2>
            <p className="text-xs text-gray-400 italic">Academic Achievements</p>
            <div className="divider"></div>
          </div>

          <div className="px-4 md:px-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                },
                768: {
                  slidesPerView: 3,
                }
              }}
              className="offer-swiper pb-12"
            >
              {offers.map((offer, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white p-2 rounded-sm shadow-md border border-gray-100">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                      <img
                        src={offer.img}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="py-4 text-center text-[10px] font-bold tracking-widest text-blue-900 uppercase truncate px-2">
                      {offer.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
            Slide to Explore More Offers
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-10 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-2">常见问题 · FAQ</h2>
            <p className="text-xs text-gray-400">Answers to Your Concerns</p>
            <div className="divider"></div>
          </div>

          <div>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'faq-item-active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Consultation />

        {/* Footer */}
        <footer className="navy-bg text-white py-20 px-10 text-center">
          <div className="mb-8 opacity-30 text-[10px] tracking-[0.4em] uppercase">Professionalism · Integrity · Excellence</div>
          <p className="text-sm opacity-90 leading-loose mb-12 italic">
            “留学规划不是一次单纯的中介服务，<br />
            而是关于未来的共同承诺。”
          </p>
          <div className="text-[10px] opacity-40 leading-relaxed font-sans">
            © 2023 成都迈科斯国际教育咨询有限公司<br />
          </div>
        </footer>

        {/* <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t flex justify-center z-50">
          <div className="w-full max-w-[800px] p-4 flex gap-3">
            <button className="flex-1 py-4 border gold-border gold-text font-bold text-xs rounded-sm active:bg-gray-50 transition-colors">录取率在线评估</button>
            <button className="flex-[1.5] py-4 navy-bg text-white font-bold text-xs rounded-sm active:opacity-90 shadow-lg shadow-blue-900/20">预约校内面对面咨询</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
