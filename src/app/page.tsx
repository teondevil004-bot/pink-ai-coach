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
    <div className="min-h-screen text-white relative bg-[#050505] overflow-hidden">
      
      {/* 🌟 優化後的背景：光球變得非常淡雅，不搶視線 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-fuchsia-800/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-800/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center gap-4">
              {/* 標籤改用更高級的藍/粉搭配 */}
              <span className="px-5 py-2 text-sm font-bold text-pink-300 bg-pink-900/20 rounded-full border border-pink-500/20 backdrop-blur-md">🎯 新手專屬</span>
              <span className="px-5 py-2 text-sm font-bold text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-500/20 backdrop-blur-md">AI 短影音工作坊</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              <span className="block text-slate-200 mb-4">零基礎也能上手！</span>
              {/* 標題漸層加入青色，更具層次感 */}
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.3)]">
                小朱教練 AI 實戰課
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              不需要任何經驗，跟著實戰步驟，手把手帶你運用 AI 工具，一人也能創造高品質爆款內容。
            </p>
            {/* 主按鈕改用藍粉漸層，視覺更平衡 */}
            <button
              onClick={scrollToForm}
              className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-bold text-xl rounded-full hover:scale-105 transition-all animate-cyan-pulse"
            >
              立即報名實戰
            </button>
          </div>
        </section>

        {/* 亮點區塊 */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "AI 腳本創作", d: "運用 AI 快速產出吸引人的短影音腳本，從構思到完成只需幾分鐘。", i: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5", color: "from-blue-500 to-cyan-500" },
              { t: "AI 影片剪輯", d: "學習使用 AI 工具，自動化處理轉場、字幕、配樂，製作專業級影片。", i: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14", color: "from-fuchsia-500 to-pink-500" },
              { t: "流量變現密碼", d: "掌握短影音流量變現的核心策略，打造可持續的獲利系統。", i: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2", color: "from-purple-500 to-indigo-500" }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[32px] text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.i} /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 作品展示 - 容器也加上玻璃質感 */}
        <section className="py-24 px-4 mx-4 sm:mx-12 glass-card rounded-[48px] mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">優秀作品展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {tiktokVideos.map((video) => (
                <div key={video.id} className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-3 shadow-xl">
                  <div className="aspect-[9/16] bg-slate-900/50 relative">
                    {/* 這裡之後可以放縮圖 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 to-cyan-900/30 mix-blend-overlay"></div>
                    <button onClick={() => window.open(video.url, '_blank')} className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-24 h-24 bg-gradient-to-r from-pink-600/90 to-fuchsia-600/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.5)] group-hover:scale-110 transition-transform">
                        <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <div className="p-6 font-bold text-xl text-white">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單 */}
        <section id="registration-form" className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-16 rounded-[48px] border-pink-500/10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">開啟你的 AI 之旅</h2>
            <p className="text-slate-300 mb-12 text-xl max-w-2xl mx-auto">名額有限，立即填寫表單，讓小朱教練帶你實戰獲利！</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-16 py-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-2xl rounded-full animate-neon-pulse hover:scale-105 transition-transform"
            >
              立即報名
            </a>
          </div>
        </section>

        {/* Floating LINE - 保持粉色霓虹 */}
        <a
          href="https://lin.ee/2m5l5CH"
          target="_blank" rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-18 h-18 p-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.6)] flex items-center justify-center hover:scale-110 transition-all animate-neon-pulse group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
          {isHovered && <span className="absolute right-full mr-4 px-4 py-2 bg-fuchsia-700 text-white text-sm font-bold rounded-xl whitespace-nowrap shadow-xl backdrop-blur-md border border-pink-500/30">教練在線等您!</span>}
        </a>
      </div>
    </div>
  );
}