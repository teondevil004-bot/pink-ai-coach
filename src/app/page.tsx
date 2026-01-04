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

  // TikTok 作品链接
  // 如需手动设置封面图，可以在每个对象中添加 thumbnail 字段
  // 例如：{ id: '1', url: '...', title: '...', thumbnail: 'https://your-image-url.com/image.jpg' }
  const tiktokVideos: TikTokVideo[] = [
    {
      id: '1',
      url: 'https://vt.tiktok.com/ZS56gySrs/',
      title: '優秀作品 #1',
      thumbnail: null, // 可以手动设置封面图 URL
    },
    {
      id: '2',
      url: 'https://vt.tiktok.com/ZS5M5Txuv/',
      title: '優秀作品 #2',
      thumbnail: null, // 可以手动设置封面图 URL
    },
  ];

  // 获取 TikTok 视频封面图
  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const video of tiktokVideos) {
        // 如果视频对象中已经设置了 thumbnail，直接使用
        if (video.thumbnail) {
          setThumbnails((prev) => ({
            ...prev,
            [video.id]: video.thumbnail || null,
          }));
          continue;
        }

        // 否则尝试从 TikTok oEmbed API 获取
        setLoading((prev) => ({ ...prev, [video.id]: true }));
        try {
          const response = await fetch(
            `/api/tiktok-oembed?url=${encodeURIComponent(video.url)}`
          );
          const data = await response.json();
          
          if (data.thumbnail_url) {
            setThumbnails((prev) => ({
              ...prev,
              [video.id]: data.thumbnail_url,
            }));
          }
        } catch (error) {
          console.error(`Failed to fetch thumbnail for video ${video.id}:`, error);
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Base Gradient Background - Soft Pastel Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 via-pink-50 to-yellow-50"></div>
        
        {/* Swirling Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-200/40 via-pink-200/30 via-cyan-200/40 to-transparent opacity-60" style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(191, 219, 254, 0.4), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(251, 207, 232, 0.3), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(165, 243, 252, 0.4), transparent 60%)'
        }}></div>
        
        {/* Circuit Board Lines Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Top-left circuit lines */}
            <path d="M50 50 L150 80 L200 120 L180 180" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
            <circle cx="150" cy="80" r="4" fill="#60a5fa" opacity="0.6" />
            <circle cx="200" cy="120" r="4" fill="#60a5fa" opacity="0.6" />
            <circle cx="180" cy="180" r="4" fill="#60a5fa" opacity="0.6" />
            
            {/* Top-right circuit lines */}
            <path d="M1150 50 L1050 80 L1000 120 L1020 180" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
            <circle cx="1050" cy="80" r="4" fill="#60a5fa" opacity="0.6" />
            <circle cx="1000" cy="120" r="4" fill="#60a5fa" opacity="0.6" />
            <circle cx="1020" cy="180" r="4" fill="#60a5fa" opacity="0.6" />
            
            {/* Bottom-left circuit lines */}
            <path d="M50 750 L150 720 L200 680 L180 620" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
            <circle cx="150" cy="720" r="4" fill="#34d399" opacity="0.6" />
            <circle cx="200" cy="680" r="4" fill="#34d399" opacity="0.6" />
            <circle cx="180" cy="620" r="4" fill="#34d399" opacity="0.6" />
            
            {/* Additional decorative lines */}
            <path d="M100 200 L300 250 L400 300" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M1100 200 L900 250 L800 300" stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
          </svg>
        </div>
        
        {/* Glowing Energy Ring - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-64">
          <div className="absolute inset-0 border-4 border-cyan-400/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-4 border-2 border-blue-400/60 rounded-full"></div>
          <div className="absolute inset-8 border border-cyan-300/40 rounded-full"></div>
        </div>
        
        {/* Additional Glowing Orbs */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Flowing Light Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Flowing Line 1 - Diagonal */}
            <path
              d="M0 200 Q300 100 600 200 T1200 200"
              stroke="url(#flowGradient1)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              className="animate-flow"
              style={{
                filter: 'blur(1px)',
                animation: 'flow 8s ease-in-out infinite'
              }}
            />
            
            {/* Flowing Line 2 - Curved */}
            <path
              d="M0 400 Q400 300 800 400 T1200 400"
              stroke="url(#flowGradient2)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              style={{
                filter: 'blur(1px)',
                animation: 'flow 10s ease-in-out infinite',
                animationDelay: '2s'
              }}
            />
            
            {/* Flowing Line 3 - Wave */}
            <path
              d="M0 600 Q200 500 400 600 T800 600 T1200 600"
              stroke="url(#flowGradient3)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              style={{
                filter: 'blur(1px)',
                animation: 'flow 12s ease-in-out infinite',
                animationDelay: '4s'
              }}
            />
            
            {/* Vertical Flowing Lines */}
            <path
              d="M200 0 Q150 200 200 400 T200 800"
              stroke="url(#flowGradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              style={{
                filter: 'blur(1px)',
                animation: 'flowVertical 9s ease-in-out infinite'
              }}
            />
            
            <path
              d="M1000 0 Q1050 200 1000 400 T1000 800"
              stroke="url(#flowGradient2)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              style={{
                filter: 'blur(1px)',
                animation: 'flowVertical 11s ease-in-out infinite',
                animationDelay: '3s'
              }}
            />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-yellow-700 bg-yellow-200/80 rounded-full border border-yellow-400/60 backdrop-blur-sm animate-pulse shadow-md">
              🎯 新手專屬
            </span>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-200/80 rounded-full border border-blue-400/60 backdrop-blur-sm shadow-md">
              AI 短影音工作坊
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2 text-slate-800 drop-shadow-lg">零基礎也能上手！</span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
              小朱教練 AI 短影音實戰課
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-4 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            專為新手設計，從零到壹手把手帶著你一起做的線下課
          </p>
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto drop-shadow-sm">
            不需要任何經驗，跟著實戰步驟，一人也能創造爆款內容
          </p>
          
          <button
            onClick={scrollToForm}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105 transform"
          >
            <span className="relative z-10">立即報名</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            課程亮點
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            掌握 AI 短影音的核心技能，打造屬於你的流量帝國
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: AI 腳本創作 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl group-hover:bg-blue-300/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI 腳本創作</h3>
                <p className="text-slate-600 leading-relaxed">
                  運用 AI 工具快速產出吸引人的短影音腳本，從構思到完成只需幾分鐘，大幅提升內容產出效率。
                </p>
              </div>
            </div>

            {/* Card 2: AI 影片剪輯 */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full blur-3xl group-hover:bg-cyan-300/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI 影片剪輯</h3>
                <p className="text-slate-600 leading-relaxed">
                  學習使用 AI 剪輯工具，自動化處理轉場、字幕、配樂，讓專業級影片製作變得簡單快速。
                </p>
              </div>
            </div>

            {/* Card 3: 流量變現密碼 */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl group-hover:bg-indigo-300/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">流量變現密碼</h3>
                <p className="text-slate-600 leading-relaxed">
                  掌握短影音流量變現的核心策略，從內容定位到商業模式，打造可持續的獲利系統。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            優秀作品展示
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            看看學員們的精彩作品，你也可以創造出這樣的爆款內容
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {tiktokVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full max-w-full"
              >
                {/* Video Container with Cover Image */}
                <div className="relative w-full max-w-full aspect-[9/16] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  {/* Cover Image or Placeholder */}
                  {thumbnails[video.id] ? (
                    <img
                      src={thumbnails[video.id]!}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // 如果图片加载失败，隐藏图片显示占位图
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80"></div>
                  )}
                  
                  {/* Loading indicator */}
                  {loading[video.id] && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-5">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* TikTok Logo/Icon */}
                  <div className="absolute top-4 left-4 z-10">
                    <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  
                  {/* Play Button */}
                  <button
                    onClick={() => handleVideoClick(video.url)}
                    className="absolute inset-0 flex items-center justify-center z-10 group/play"
                    aria-label={`播放 ${video.title}`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover/play:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                {/* Video Title */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 text-center">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-500 text-center mt-1">
                    點擊觀看完整影片
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            實體課程花絮
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            看看我們精彩的課程現場，與學員們一起學習成長的時刻
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* AI 操作學習 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 aspect-[4/3]">
              <img
                src="/class-8.png"
                alt="AI 操作學習"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-slate-700 font-semibold text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">AI 操作學習</p>
              </div>
            </div>
            
            {/* 線下實作練習 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-blue-50 aspect-[4/3]">
              <img
                src="/class-6.png"
                alt="線下實作練習"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-slate-700 font-semibold text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">線下實作練習</p>
              </div>
            </div>
            
            {/* 講師親自教學 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-indigo-50 to-blue-50 aspect-[4/3]">
              <img
                src="/class-7.png"
                alt="講師親自教學"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-slate-700 font-semibold text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">講師親自教學</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            學員見證
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            聽聽學員們的真實心得分享
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial Card 1 - 雪美/三金孫大姐姐 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200 opacity-60">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 text-base">
                  這門課程讓我從零開始學會 AI 短影音製作，現在已經能夠獨立創作出高品質的內容了！對於身為奶奶的我來說真的太容易了!
                </p>
                
                {/* Avatar and Name */}
                <div className="flex items-center">
                  <img
                    src="/class-1.jpg"
                    alt="雪美 - 三金孫大姐姐"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900">雪美</p>
                    <p className="text-sm text-slate-500">三金孫大姐姐</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 - 明鴻/日跑十公里大哥 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200 opacity-60">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 text-base">
                  小朱教練的教學方式非常實用，每個步驟都講解得很清楚，即使是完全沒經驗的新手也能輕鬆上手，當初的我連軟體在哪下載都不知道呢!
                </p>
                
                {/* Avatar and Name */}
                <div className="flex items-center">
                  <img
                    src="/class-2.jpg"
                    alt="明鴻 - 日跑十公里大哥"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900">明鴻</p>
                    <p className="text-sm text-slate-500">日跑十公里大哥</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 - 鵬宇/愛健身的餐廳經理 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200 opacity-60">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 text-base">
                  課程內容超值，不僅學會了 AI 工具的使用，更重要的是掌握了流量變現的關鍵技巧，真的很推薦！對於我推廣健康事業很有幫助
                </p>
                
                {/* Avatar and Name */}
                <div className="flex items-center">
                  <img
                    src="/class-3.jpg"
                    alt="鵬宇 - 愛健身的餐廳經理"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900">鵬宇</p>
                    <p className="text-sm text-slate-500">愛健身的餐廳經理</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                立即報名
              </h2>
              <p className="text-slate-600 text-lg">
                填寫下方表單，開啟你的 AI 短影音之旅
              </p>
            </div>
            
            {/* Registration Button */}
            <div className="flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-3"
              >
                <span className="relative z-10">立即填寫報名表單</span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating LINE Button */}
          <a
        href="https://line.me/ti/p/@yourid"
            target="_blank"
            rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#06C755] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="聯絡我們 LINE"
      >
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        {isHovered && (
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            聯絡我們
          </span>
        )}
      </a>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Avatar with Tech Border */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full blur-md opacity-50 animate-pulse"></div>
              <div className="relative w-20 h-20 rounded-full border-4 border-blue-400/30 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                <img
                  src="/class-4.jpg"
                  alt="小朱教練"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Tech Ring Effect */}
              <div className="absolute -inset-2 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Brand Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                小朱教練實戰班
              </h3>
              <p className="text-slate-300 text-sm mb-1">AI 短影音工作坊</p>
              <p className="text-slate-400 text-xs">
                © 2026 AI 短影音工作坊 - 小朱教練實戰班
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
