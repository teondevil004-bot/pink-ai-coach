'use client';

import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiktokVideos = [
    { id: '1', url: 'https://vt.tiktok.com/ZS56gySrs/', title: '優秀作品 #1' },
    { id: '2', url: 'https://vt.tiktok.com/ZS5M5Txuv/', title: '優秀作品 #2' },
  ];

  return (
    // 最外層容器：設定深色基底
    <div className="min-h-screen text-white relative bg-[#030712] overflow-hidden">
      
      {/* ==================== 核心背景層開始 ==================== */}
      {/* 1. 靜態科技網格花紋層 (細微的紋理) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* 2. 動態流光色彩層 (提供豐富的顏色變化) */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-bg-flow opacity-60"
           style={{ 
             background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.3), transparent 50%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.3), transparent 50%), radial-gradient(circle at center, rgba(236, 72, 153, 0.2), transparent 50%)',
             filter: 'blur(60px)',
           }}>
      </div>
      
      {/* 3. 強力光暈點綴層 (增加對比度) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] w-[70%] h-[70%] bg-fuchsia-600/20 rounded-full blur-[180px] animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[10%] w-[70%] h-[70%] bg-cyan-600/20 rounded-full blur-[180px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      </div>
      {/* ==================== 核心背景層結束 ==================== */}


      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-10 flex justify-center gap-4 scale-110">
              <span className="px-6 py-2 text-sm font-bold text-pink-200 bg-pink-900/30 rounded-full border border-pink-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.2)]">🎯 新手專屬</span>
              <span className="px-6 py-2 text-sm font-bold text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">AI 短影音工作坊</span>
            </div>
            <h1 className="text-6xl sm:text-8xl font-extrabold mb-10 leading-tight tracking-tight drop-shadow-2xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-4">零基礎也能上手！</span>
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                小朱教練 AI 實戰課
              </span>
            </h1>
            <p className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium glass-card p-6 rounded-2xl border-none bg-white/5">
              不需要任何經驗，跟著實戰步驟，手把手帶你運用 AI 工具，一人也能創造高品質爆款內容。
            </p>
            <button
              onClick={scrollToForm}
              className="px-16 py-8 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold text-2xl rounded-full hover:scale-105 transition-all animate-cyan-pulse shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
              立即報名實戰
            </button>
          </div>
        </section>

        {/* 亮點區塊 */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "AI 腳本創作", d: "運用 AI 快速產出吸引人的短影音腳本，從構思到完成只需幾分鐘。", i: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5", color: "from-blue-500 to-cyan-500", shadow: "shadow-cyan-500/30" },
              { t: "AI 影片剪輯", d: "學習使用 AI 工具，自動化處理轉場、字幕、配樂，製作專業級影片。", i: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14", color: "from-fuchsia-500 to-pink-500", shadow: "shadow-pink-500/30" },
              { t: "流量變現密碼", d: "掌握短影音流量變現的核心策略，打造可持續的獲利系統。", i: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2", color: "from-purple-500 to-indigo-500", shadow: "shadow-purple-500/30" }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-12 rounded-[40px] text-center group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl ${item.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.i} /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${item.color} transition-all">{item.t}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 作品展示 */}
        <section className="py-24 px-4 mx-4 sm:mx-12 glass-card rounded-[60px] mb-20 border-t-fuchsia-500/30 border-b-cyan-500/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">優秀作品展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-[40px] overflow-hidden hover:-translate-y-4 shadow-2xl transition-all duration-500 ring-1 ring-white/10 hover:ring-fuchsia-500/50">
                  <div className="aspect-[9/16] bg-slate-900/80 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-cyan-600/20 mix-blend-overlay group-hover:opacity-100 transition-opacity"></div>
                    {/* 模擬流光背景 */}
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] transform -skew-x-12"></div>
                    
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-28 h-28 bg-gradient-to-r from-pink-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.6)] group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-14 h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-8 font-bold text-2xl text-white bg-white/5">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單 */}
        <section id="registration-form" className="py-32 px-4 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuchsia-900/20 pointer-events-none"></div>
          <div className="max-w-5xl mx-auto glass-card p-20 rounded-[60px] border-t-cyan-500/30 border-b-fuchsia-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500"></div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-10 text-white drop-shadow-lg">開啟你的 AI 變現之旅</h2>
            <p className="text-slate-300 mb-16 text-2xl max-w-3xl mx-auto font-medium">名額有限，立即填寫表單，搶佔短影音紅利先機！</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-20 py-8 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600 text-white font-bold text-3xl rounded-full animate-neon-pulse hover:scale-105 transition-transform shadow-[0_0_50px_rgba(236,72,153,0.5)]"
            >
              立即報名
            </a>
          </div>
        </section>

        {/* Floating LINE */}
        <a
          href="https://lin.ee/2m5l5CH"
          target="_blank" rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.7)] flex items-center justify-center hover:scale-110 transition-all animate-neon-pulse group ring-2 ring-white/20 hover:ring-fuchsia-400"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
          {isHovered && <span className="absolute right-full mr-5 px-6 py-3 bg-fuchsia-700/90 text-white text-base font-bold rounded-2xl whitespace-nowrap shadow-2xl backdrop-blur-md border border-pink-500/30">教練在線等您!</span>}
        </a>
      </div>
    </div>
  );
}