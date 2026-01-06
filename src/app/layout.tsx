'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<{[key: string]: string | null}>({});

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiktokVideos = [
    { id: '1', url: 'https://vt.tiktok.com/ZS56gySrs/', title: 'AI 創意短片展示' },
    { id: '2', url: 'https://vt.tiktok.com/ZS5M5Txuv/', title: '學員實戰成果' },
  ];

  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const video of tiktokVideos) {
        try {
          const response = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) setThumbnails((prev) => ({ ...prev, [video.id]: data.thumbnail_url }));
        } catch (e) { console.error(e); }
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen text-white relative bg-[#030712] overflow-hidden">
      
      {/* 🔮 動態背景層：流光 + 粒子 + 背景文字 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center">
          <span className="text-[30vw] font-black text-white select-none">AI</span>
        </div>
        {/* 懸浮粒子 */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-float opacity-20"
               style={{ 
                 width: Math.random() * 6 + 'px', 
                 height: Math.random() * 6 + 'px',
                 top: Math.random() * 100 + '%', 
                 left: Math.random() * 100 + '%',
                 animationDelay: Math.random() * 5 + 's' 
               }}></div>
        ))}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-fuchsia-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <div className="mb-12 flex justify-center gap-4 scale-125">
              <span className="px-6 py-2 text-sm font-bold text-pink-200 bg-pink-500/10 rounded-full border border-pink-500/30 backdrop-blur-md">🎯 新手專屬</span>
              <span className="px-6 py-2 text-sm font-bold text-cyan-200 bg-cyan-500/10 rounded-full border border-cyan-500/30 backdrop-blur-md">AI 短影音實戰</span>
            </div>
            <h1 className="text-6xl sm:text-9xl font-black mb-10 leading-tight tracking-tighter">
              <span className="block text-white opacity-90">零基礎也能</span>
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">爆款變現</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto glass-card p-8 rounded-3xl border-none">
              手把手帶你從 0 到 1 運用 AI 工具，一人也能創造高品質影音帝國。
            </p>
            <button onClick={scrollToForm} className="px-20 py-8 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold text-3xl rounded-full hover:scale-105 transition-all animate-neon-pulse shadow-[0_0_50px_rgba(236,72,153,0.4)]">
              立即開啟 AI 之路
            </button>
          </div>
        </section>

        {/* 📊 新增：數據化成果區塊 */}
        <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "500+", t: "培訓學員" },
            { n: "10,000+", t: "影音產量" },
            { n: "100萬+", t: "總曝光量" },
            { n: "98%", t: "課程好評" }
          ].map((s, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl text-center border-t-pink-500/20">
              <div className="text-5xl font-black mb-2 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">{s.n}</div>
              <div className="text-slate-400 font-bold">{s.t}</div>
            </div>
          ))}
        </section>

        {/* 🗺️ 新增：學習路徑圖 */}
        <section className="py-32 px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">課程學習路徑</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 hidden md:block opacity-20"></div>
            {[
              { s: "STEP 1", t: "AI 腳本構思", d: "掌握工具指令，產出精準文案" },
              { s: "STEP 2", t: "影音自動化", d: "AI 一鍵剪輯，省去繁瑣工序" },
              { s: "STEP 3", t: "流量變現", d: "帳號定位優化，精準獲取流量" }
            ].map((p, i) => (
              <div key={i} className="relative z-10 glass-card p-10 rounded-[40px] w-full md:w-72 border-pink-500/20 hover:scale-110 transition-transform">
                <div className="text-pink-500 font-black mb-4 text-xl">{p.s}</div>
                <h3 className="text-2xl font-bold mb-4">{p.t}</h3>
                <p className="text-slate-400 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 優秀作品展示 */}
        <section className="py-24 px-4 mx-4 sm:mx-12 glass-card rounded-[60px] mb-20 border-none">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-20">學員實戰作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-[40px] overflow-hidden hover:-translate-y-4 transition-all relative">
                  <div className="aspect-[9/16] bg-slate-900/80 relative">
                    {thumbnails[video.id] && <img src={thumbnails[video.id]!} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-24 h-24 bg-pink-600/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,0,255,0.6)] group-hover:scale-110 transition-transform">
                        <svg className="w-14 h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-8 font-bold text-2xl text-white">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單 */}
        <section id="registration-form" className="py-20 text-center">
          <div className="max-w-4xl mx-auto glass-card p-20 rounded-[60px] border-t-cyan-500/30">
            <h2 className="text-5xl font-bold mb-10">現在就開始轉型</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform" target="_blank" rel="noopener noreferrer"
               className="inline-block px-16 py-6 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold text-3xl rounded-full animate-neon-pulse">
              立即填寫表單
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 flex flex-col items-center">
          <div className="glass-card p-12 rounded-[50px] flex flex-col items-center gap-8 border-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-28 h-28 rounded-full border-4 border-white/20 overflow-hidden bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-1">
                <img src="/class-4.jpg" alt="小朱教練" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute -inset-3 border-2 border-fuchsia-500/20 rounded-full animate-spin-slow"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">小朱教練實戰班</h3>
              <p className="text-slate-500">© 2026 AI 短影音工作坊 - 小朱教練實戰班</p>
            </div>
          </div>
        </footer>

        {/* Floating LINE */}
        <a href="https://lin.ee/2m5l5CH" target="_blank" rel="noopener noreferrer"
           className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all animate-neon-pulse group"
           onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
          {isHovered && <span className="absolute right-full mr-5 px-6 py-3 bg-fuchsia-700/80 text-white font-bold rounded-2xl whitespace-nowrap shadow-2xl border border-pink-500/30">教練在線等您!</span>}
        </a>
      </div>
    </div>
  );
}