'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<{[key: string]: string | null}>({});

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiktokVideos = [
    { id: '1', url: 'https://vt.tiktok.com/ZS56gySrs/', title: '優秀作品 #1' },
    { id: '2', url: 'https://vt.tiktok.com/ZS5M5Txuv/', title: '優秀作品 #2' },
  ];

  return (
    <div className="min-h-screen text-white relative bg-[#020202]">
      
      {/* 🔮 背景裝飾光球：這是讓「玻璃質感」現形的關鍵 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-fuchsia-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[45%] h-[45%] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="text-center">
            <div className="mb-6 flex justify-center gap-3">
              <span className="px-4 py-2 text-sm font-bold text-pink-300 bg-pink-500/10 rounded-full border border-pink-500/30 backdrop-blur-md animate-pulse">🎯 新手專屬</span>
              <span className="px-4 py-2 text-sm font-bold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/30 backdrop-blur-md">AI 短影音工作坊</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">零基礎也能上手！</span>
              <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]">小朱教練 AI 實戰課</span>
            </h1>
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-[0_0_25px_rgba(255,0,255,0.5)] hover:scale-105 transition-all animate-neon-pulse"
            >
              立即報名
            </button>
          </div>
        </section>

        {/* 亮點區塊：使用玻璃卡片 */}
        <section className="py-24 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "AI 腳本創作", d: "快速產出爆款腳本，提升內容效率。", i: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" },
            { t: "AI 影片剪輯", d: "自動化處理轉場配樂，新手也能變大師。", i: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" },
            { t: "流量變現密碼", d: "掌握核心策略，打造獲利系統。", i: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.i} /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-100">{item.t}</h3>
              <p className="text-slate-400">{item.d}</p>
            </div>
          ))}
        </section>

        {/* 作品展示 */}
        <section className="py-24 px-4 glass-card mx-4 sm:mx-12 rounded-[40px] border-pink-500/10 mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">優秀作品展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-3">
                  <div className="aspect-[9/16] bg-slate-900/50 relative">
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-pink-600/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.6)] group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-5 font-bold text-pink-50">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單 */}
        <section id="registration-form" className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-16 rounded-[40px] border-pink-500/20">
            <h2 className="text-4xl font-bold mb-6">開啟你的 AI 之旅</h2>
            <p className="text-slate-400 mb-12 text-lg">填寫表單，讓小朱教練帶你實戰</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl rounded-full animate-neon-pulse shadow-[0_0_30px_rgba(255,0,255,0.3)]"
            >
              立即報名
            </a>
          </div>
        </section>

        {/* Floating LINE */}
        <a
          href="https://lin.ee/2m5l5CH"
          target="_blank" rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-[0_0_25px_rgba(255,0,255,0.7)] flex items-center justify-center hover:scale-110 transition-all animate-neon-pulse group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
          {isHovered && <span className="absolute right-full mr-4 px-4 py-2 bg-fuchsia-600 text-white text-sm rounded-xl whitespace-nowrap shadow-xl">教練在線等您!</span>}
        </a>
      </div>
    </div>
  );
}