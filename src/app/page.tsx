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

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white relative bg-[#020617] overflow-hidden">
      {/* 🌌 星空背景層 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="nebula top-[-10%] left-[-5%] w-[60%] h-[60%] bg-fuchsia-600/15 rounded-full blur-[120px]"></div>
        <div className="nebula bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center pt-20 px-4 text-center">
        
        {/* 🏷️ 找回最上方的兩個小標籤 */}
        <div className="mb-10 flex justify-center gap-3 sm:gap-4">
          <span className="px-5 py-2 text-xs sm:text-sm font-bold text-pink-200 bg-pink-500/20 rounded-full border border-pink-500/30 backdrop-blur-md">🎯 新手專屬</span>
          <span className="px-5 py-2 text-xs sm:text-sm font-bold text-cyan-200 bg-cyan-500/20 rounded-full border border-cyan-500/30 backdrop-blur-md">AI 短影音實戰</span>
        </div>
        
        <h1 className="text-5xl sm:text-8xl font-black mb-8 tracking-tighter leading-tight">
          零基礎也能 <br/>
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">愛上剪輯</span>
        </h1>

        <div className="my-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-2xl blur opacity-25"></div>
          <img src="/580646.jpg" alt="小朱教練" className="relative rounded-2xl shadow-2xl border border-white/10 w-[300px] h-auto object-cover" />
        </div>

        {/* 📊 數據展示 */}
        <section className="py-12 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { n: "500+", t: "培訓學員" }, { n: "10K+", t: "影音產量" },
            { n: "1M+", t: "累計曝光" }, { n: "99.9%", t: "滿意好評" }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-black text-white">{s.n}</div>
              <div className="text-slate-400 text-xs font-bold">{s.t}</div>
            </div>
          ))}
        </section>

        {/* 🎥 TikTok 影片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full mb-20">
          {tiktokVideos.map((video) => (
            <div key={video.id} className="bg-white/5 p-4 rounded-[30px] border border-white/10 overflow-hidden group">
              <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative">
                {thumbnails[video.id] && <img src={thumbnails[video.id]!} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
                <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-pink-600/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                     <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </button>
              </div>
              <div className="mt-4 font-bold text-lg">{video.title}</div>
            </div>
          ))}
        </div>

        <button id="registration-form" onClick={scrollToForm} className="px-12 py-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full font-bold text-2xl shadow-lg hover:scale-105 transition-all mb-20">
          立即開啟創作之路
        </button>

        {/* 👤 個人頭像結尾 */}
        <footer className="py-20 flex flex-col items-center border-t border-white/5 w-full">
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-full flex flex-col items-center gap-6 border border-white/10">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden">
              <img src="/580646.jpg" alt="小朱教練" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">小朱教練實戰班</h3>
              <p className="text-slate-500 text-xs italic tracking-widest">© 2026 短影音創業實戰班</p>
            </div>
          </div>
        </footer>
      </div>

      {/* 🟢 螢光粉紅 LINE@ 按鈕 + 問問老師 */}
      <a href="https://lin.ee/PbulCMm" target="_blank" 
         className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-[0_0_20px_rgba(219,39,119,0.5)] flex items-center justify-center animate-pulse group"
         onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
        {isHovered && (
          <span className="absolute right-full mr-4 px-6 py-3 bg-fuchsia-600 text-white font-bold rounded-2xl whitespace-nowrap shadow-xl">
            問問老師 ✨
          </span>
        )}
      </a>
    </div>
  );
}