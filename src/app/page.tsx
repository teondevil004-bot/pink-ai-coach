'use client';

import { useState, useEffect } from 'react';

// 定義類型
interface VideoThumbnail {
  [key: string]: string | null;
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<VideoThumbnail>({});

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
        try {
          const response = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            setThumbnails((prev) => ({ ...prev, [video.id]: data.thumbnail_url }));
          }
        } catch (error) {
          console.error(`無法獲取封面圖:`, error);
        }
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen text-white relative bg-[#020617] overflow-hidden">
      
      {/* 🌌 宇宙流光背景層 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 flex items-center justify-center select-none">
          <span className="text-[30vw] font-black text-white tracking-widest">AI</span>
        </div>
        <div className="stars-base stars-small"></div>
        <div className="stars-base stars-medium"></div>
        <div className="nebula top-[-10%] left-[-5%] w-[60%] h-[60%] bg-fuchsia-600/15 rounded-full blur-[120px]"></div>
        <div className="nebula bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="noise-overlay"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20">
          <div className="text-center max-w-5xl">
            <div className="mb-10 flex justify-center gap-2 sm:gap-4">
              <span className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold text-pink-200 bg-pink-500/20 rounded-full border border-pink-500/30 backdrop-blur-md">🎯 新手專屬</span>
              <span className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold text-cyan-200 bg-cyan-500/20 rounded-full border border-cyan-500/30 backdrop-blur-md">AI 短影音實戰</span>
            </div>
            
            <h1 className="text-5xl sm:text-8xl font-black mb-8 leading-tight tracking-tighter drop-shadow-2xl">
              <span className="block text-white opacity-90 mb-2 sm:mb-4">零基礎也能</span>
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">愛上剪輯</span>
            </h1>

            {/* 📸 您新的宣傳照 */}
            <div className="flex justify-center my-10 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-2xl blur opacity-25"></div>
              <img 
                src="/580646.jpg" 
                alt="小朱教練" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-[300px] h-auto object-cover" 
              />
            </div>

            <p className="text-lg sm:text-2xl text-slate-300 mb-12 sm:mb-16 max-w-3xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border-none">
              現場帶你掌握剪輯工作和運用 AI 協助，從文案創作到影片剪輯，一個人也能打造屬於自已的風格影片。
            </p>

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
            <div key={i} className="glass-card p-6 sm:p-10 rounded-2xl text-center">
              <div className="text-3xl sm:text-5xl font-black mb-2 text-white">{s.n}</div>
              <div className="text-slate-400 text-xs sm:text-sm font-bold">{s.t}</div>
            </div>
          ))}
        </section>

        {/* 優秀作品展示 (TikTok) */}
        <section className="py-24 px-4 mx-4 sm:mx-12 glass-card rounded-[40px] mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16">實際完成作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-[30px] overflow-hidden hover:-translate-y-4 transition-all relative">
                  <div className="aspect-[9/16] bg-slate-900/80 relative">
                    {thumbnails[video.id] && <img src={thumbnails[video.id]!} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-20 h-20 bg-pink-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-6 font-bold text-xl text-white">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單區 */}
        <section id="registration-form" className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-[40px]">
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-white">搶佔先機，名額有限</h2>
            <div className="flex justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl rounded-full animate-neon hover:scale-105 transition-transform"
              >
                立即報名工作坊
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 flex flex-col items-center">
          <div className="glass-card p-10 rounded-full flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden bg-gradient-to-br from-fuchsia-500 to-cyan-500">
              <img src="/580646.jpg" alt="小朱教練" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">小朱教練實戰班</h3>
              <p className="text-slate-500 text-xs italic">© 2026 AI 短影音工作坊</p>
            </div>
          </div>
        </footer>

        {/* 🟢 您的 LINE@ 按鈕 */}
        <a href="