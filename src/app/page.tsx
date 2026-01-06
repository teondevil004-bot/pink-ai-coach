'use client';

import { useState, useEffect } from 'react';

interface VideoThumbnail {
  [key: string]: string | null;
}

interface TikTokVideo {
  id: string;
  url: string;
  title: string;
  thumbnail?: string | null;
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnails, setThumbnails] = useState<VideoThumbnail>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiktokVideos: TikTokVideo[] = [
    {
      id: '1',
      url: 'https://vt.tiktok.com/ZS56gySrs/',
      title: '優秀作品 #1',
      thumbnail: null,
    },
    {
      id: '2',
      url: 'https://vt.tiktok.com/ZS5M5Txuv/',
      title: '優秀作品 #2',
      thumbnail: null,
    },
  ];

  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const video of tiktokVideos) {
        if (video.thumbnail) {
          setThumbnails((prev) => ({ ...prev, [video.id]: video.thumbnail || null }));
          continue;
        }
        setLoading((prev) => ({ ...prev, [video.id]: true }));
        try {
          const response = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            setThumbnails((prev) => ({ ...prev, [video.id]: data.thumbnail_url }));
          }
        } catch (error) {
          console.error(`Failed to fetch thumbnail:`, error);
        } finally {
          setLoading((prev) => ({ ...prev, [video.id]: false }));
        }
      }
    };
    fetchThumbnails();
  }, []);

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section - 深色背景與粉色流光 */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]"></div>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15), transparent 40%)'
        }}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-pink-200 bg-pink-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm animate-pulse">
              🎯 新手專屬
            </span>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-200 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              AI 短影音工作坊
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2 text-white">零基礎也能上手！</span>
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">
              小朱教練 AI 短影音實戰課
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            不需要任何經驗，手把手帶你創造霓虹般的爆款內容
          </p>
          
          <button
            onClick={scrollToForm}
            className="group relative px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all duration-300 hover:scale-105 transform animate-neon-pulse"
          >
            立即報名
          </button>
        </div>
      </section>

      {/* Course Highlights - 玻璃擬態卡片 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI 腳本創作", desc: "運用 AI 快速產出吸引人的短影音腳本，提升效率。", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" },
            { title: "AI 影片剪輯", desc: "自動化處理轉場、字幕、配樂，製作專業影片。", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" },
            { title: "流量變現密碼", desc: "掌握短影音變現策略，打造可持續獲利系統。", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-100">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works - 玻璃質感作品展示 */}
      <section className="py-20 px-4 glass-card mx-4 sm:mx-16 rounded-3xl border-none">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">優秀作品展示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiktokVideos.map((video) => (
              <div key={video.id} className="group relative glass-card rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all">
                <div className="relative aspect-[9/16] bg-slate-800">
                  {thumbnails[video.id] && <img src={thumbnails[video.id]!} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                  <button onClick={() => handleVideoClick(video.url)} className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-20 h-20 bg-pink-500/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.5)] group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </button>
                </div>
                <div className="p-4 text-center font-bold text-pink-100">{video.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form - 粉色霓虹表單區 */}
      <section id="registration-form" className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl text-center border-pink-500/20">
          <h2 className="text-4xl font-bold mb-6 text-white">立即報名</h2>
          <p className="text-slate-400 mb-10">填寫表單，加入小朱教練的科技感實戰班</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold text-xl rounded-full animate-neon-pulse shadow-lg"
          >
            立即填寫報名表單
          </a>
        </div>
      </section>

      {/* Floating LINE Button - 修正連結並加上霓虹光 */}
      <a
        href="https://lin.ee/2m5l5CH"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.8)] flex items-center justify-center hover:scale-110 transition-all group animate-neon-pulse"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        {isHovered && (
          <span className="absolute right-full mr-3 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            小朱教練在線等
          </span>
        )}
      </a>
    </div>
  );
}