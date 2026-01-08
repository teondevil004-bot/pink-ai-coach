'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<{[key: string]: string | null}>({});

  const tiktokVideos = [
    { id: '1', url: 'https://vt.tiktok.com/ZS56gySrs/', title: 'AI 創意短片實戰' },
    { id: '2', url: 'https://vt.tiktok.com/ZS5M5Txuv/', title: '學員爆款成果' },
  ];

  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const video of tiktokVideos) {
        try {
          const response = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            setThumbnails(prev => ({ ...prev, [video.id]: data.thumbnail_url }));
          }
        } catch (error) { console.error(error); }
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen text-white relative bg-[#020617] overflow-hidden">
      {/* 🌌 星空背景層 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="nebula top-[-10%] left-[-5%] w-[60%] h-[60%] bg-fuchsia-600/15 rounded-full blur-[120px]"></div>
        <div className="nebula bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-20 px-4 text-center">
        <h1 className="text-5xl sm:text-8xl font-black mb-8 tracking-tighter">
          零基礎也能 <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">愛上剪輯</span>
        </h1>

        <div className="my-10">
          <img src="/580646.jpg" alt="小朱教練" className="rounded-2xl shadow-2xl w-[300px] border border-white/10 mx-auto" />
        </div>

        {/* 📊 數據分析展示區 (重新找回此區塊) */}
        <section className="py-12 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { n: "500+", t: "培訓學員" }, { n: "10K+", t: "影音產量" },
            { n: "1M+", t: "累計曝光" }, { n: "99.9%", t: "滿意好評" }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-black text-white">{s.n}</div>
              <div className="text-slate-400 text-xs font-bold">{s.t}</div>
            </div>
          ))}
        </section>

        {/* TikTok 影片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-20">
          {tiktokVideos.map((video) => (
            <div key={video.id} className="bg-white/5 p-4 rounded-3xl border border-white/10">
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative">
                {thumbnails[video.id] && <img src={thumbnails[video.id]!} className="w-full h-full object-cover opacity-70" />}
                <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-lg text-2xl">▶</div>
                </button>
              </div>
              <div className="mt-4 font-bold">{video.title}</div>
            </div>
          ))}
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform" 
           target="_blank" className="px-12 py-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full font-bold text-2xl animate-pulse">
          立即報名工作坊
        </a>
      </div>

      {/* 🟢 LINE@ 按鈕 */}
      <a href="https://lin.ee/PbulCMm" target="_blank" 
         className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
         onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <span className="font-bold text-white">LINE</span>
        {isHovered && <span className="absolute right-full mr-4 px-4 py-2 bg-black text-white text-xs rounded-lg whitespace-nowrap">教練在線等您!</span>}
      </a>
    </div>
  );
}