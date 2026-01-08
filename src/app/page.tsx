'use client';

import { useState, useEffect } from 'react';

// 定義類型
interface VideoThumbnail {
  [key: string]: string | null;
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<VideoThumbnail>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiktokVideos = [
    { id: '1', url: 'https://vt.tiktok.com/ZS56gySrs/', title: 'AI 創意短片實戰' },
    { id: '2', url: 'https://vt.tiktok.com/ZS5M5Txuv/', title: '學員爆款成果' },
  ];

  // 自動抓取首圖邏輯
  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const video of tiktokVideos) {
        setLoading((prev) => ({ ...prev, [video.id]: true }));
        try {
          const response = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            setThumbnails((prev) => ({ ...prev, [video.id]: data.thumbnail_url }));
          }
        } catch (error) {
          console.error(`無法獲獲取封面圖:`, error);
        } finally {
          setLoading((prev) => ({ ...prev, [video.id]: false }));
        }
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen text-white relative bg-[#020617] overflow-hidden">
      
      {/* 🌌 宇宙流光背景層 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 背景裝飾大字 (已調整比例，避免 PAC 尷尬) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 flex items-center justify-center select-none">
          <span className="text-[30vw] font-black text-white tracking-widest">AI</span>
        </div>
        {/* 星空層 */}
        <div className="stars-base stars-small"></div>
        <div className="stars-base stars-medium"></div>
        {/* 星雲層 */}
        <div className="nebula top-[-10%] left-[-5%] w-[60%] h-[60%] bg-fuchsia-600/15 rounded-full blur-[120px]"></div>
        <div className="nebula bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-600/15 rounded-full blur-[120px]"></div>
      </div>

      {/* 🌫️ 磨砂顆粒覆蓋層 (教練最愛的質感) */}
      <div className="noise-overlay"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <div className="mb-10 flex justify-center gap-2 sm:gap-4">
              <span className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold text-pink-200 bg-pink-500/20 rounded-full border border-pink-500/30 backdrop-blur-md">🎯 新手專屬</span>
              <span className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold text-cyan-200 bg-cyan-500/20 rounded-full border border-cyan-500/30 backdrop-blur-md">AI 短影音實戰</span>
            </div>
            <h1 className="text-5xl sm:text-8xl font-black mb-8 leading-tight tracking-tighter drop-shadow-2xl">
              <span className="block text-white opacity-90 mb-2 sm:mb-4">零基礎也能</span>
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">愛上剪輯</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 mb-12 sm:mb-16 max-w-3xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border-none">
              現場帶你掌握剪輯工作和運用 AI 協助，從文案創作到影片剪輯，一個人也能打造屬於自已的風格影片。
            </p>
            <div className="flex justify-center my-8">
              <img src="/580646.jpg" alt="AI 短影音工作坊" style={{ width: '300px' }} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex justify-center my-8">
              <img src="/580646.jpg" alt="AI 短影音工作坊" style={{ width: '300px' }} className="rounded-lg shadow-lg" />
            </div>
            <button onClick={scrollToForm} className="px-10 py-5 sm:px-20 sm:py-8 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold text-xl sm:text-3xl rounded-full animate-neon shadow-lg hover:scale-105 transition-transform">
              立即開啟創作之路
            </button>
          </div>
        </section>

        {/* 📊 數據展示 */}
        <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { n: "500+", t: "培訓學員" }, { n: "10K+", t: "影音產量" },
            { n: "1M+", t: "累計曝光" }, { n: "99.9%", t: "滿意好評" }
          ].map((s, i) => (
            <div key={i} className="glass-card p-6 sm:p-10 rounded-2xl sm:rounded-3xl text-center border-t-pink-500/20">
              <div className="text-3xl sm:text-5xl font-black mb-2 text-white">{s.n}</div>
              <div className="text-slate-400 text-xs sm:text-sm font-bold">{s.t}</div>
            </div>
          ))}
        </section>

        {/* 🗺️ 學習路徑 */}
        <section className="py-24 px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">三步開啟你的 剪輯之路</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { s: "01", t: "精準腳本", d: "讓 AI 幫你寫出引人入勝的故事" },
              { s: "02", t: "一鍵剪輯", d: "自動化工具，減少 90% 的工序" },
              { s: "03", t: "理解流量", d: "優化策略，精準對接潛在客戶" }
            ].map((p, i) => (
              <div key={i} className="glass-card p-10 rounded-[40px] w-full md:w-80 border-cyan-500/20">
                <div className="text-cyan-400 font-black text-3xl mb-4">{p.s}</div>
                <h3 className="text-2xl font-bold mb-4">{p.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 優秀作品展示 */}
        <section className="py-24 px-4 mx-4 sm:mx-12 glass-card rounded-[40px] sm:rounded-[60px] mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16">實際完成作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 max-w-4xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-[30px] sm:rounded-[40px] overflow-hidden hover:-translate-y-4 transition-all relative">
                  <div className="aspect-[9/16] bg-slate-900/80 relative">
                    {thumbnails[video.id] && <img src={thumbnails[video.id]!} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 sm:w-14 sm:h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-6 sm:p-8 font-bold text-xl sm:text-2xl text-white">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單區：🔹 重點修復這裡的按鈕 */}
        <section id="registration-form" className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-10 sm:p-20 rounded-[40px] sm:rounded-[60px] border-t-cyan-500/30">
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-white">搶佔先機，名額有限</h2>
            <div className="flex justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                // 🔹 修正後的 Class：w-full (手機全寬), sm:w-auto (電腦自動), px-8 py-4 (適當內距)
                className="block w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl sm:text-2xl rounded-full animate-neon relative z-10 hover:scale-105 transition-transform"
              >
                立即報名工作坊
              </a>
            </div>
          </div>
        </section>

        {/* Footer：找回教練頭像 */}
        <footer className="py-20 flex flex-col items-center">
          <div className="glass-card p-10 sm:p-12 rounded-[40px] sm:rounded-[50px] flex flex-col items-center gap-6 sm:gap-8 border-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white/20 overflow-hidden bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-1">
                <img src="/class-4.jpg" alt="小朱教練" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute -inset-3 border-2 border-fuchsia-500/20 rounded-full animate-spin-slow"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">小朱教練實戰班</h3>
              <p className="text-slate-500 text-xs sm:text-sm italic">© 2026 AI 短影音工作坊 - 小朱教練實戰班</p>
            </div>
          </div>
        </footer>

        {/* Floating LINE */}
        <a href="https://lin.ee/PbulCMm" target="_blank" rel="noopener noreferrer"
           className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center animate-neon group"
           onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <svg className="w-10 h-10 sm:w-11 sm:h-11 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
          {isHovered && <span className="absolute right-full mr-4 px-4 py-2 bg-fuchsia-700 text-white text-sm font-bold rounded-xl whitespace-nowrap shadow-xl border border-pink-500/30">教練在線等您!</span>}
        </a>
      </div>
    </div>
  );
}