'use client';

import { useState, useEffect } from 'react';

interface VideoThumbnail { [key: string]: string | null; }

export default function Home() {
  const [thumbnails, setThumbnails] = useState<VideoThumbnail>({});

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
        } catch (error) { console.error("獲取封面失敗", error); }
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        <h1 className="text-5xl sm:text-7xl font-black mb-10 text-center">
          零基礎也能<br/><span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">愛上剪輯</span>
        </h1>
        
        {/* 📸 宣傳照 - 已設定寬度並置中 */}
        <div className="flex justify-center mb-12">
          <img 
            src="/580646.jpg" 
            alt="小朱教練宣傳照" 
            className="rounded-2xl shadow-2xl w-[300px] h-auto border border-white/10"
          />
        </div>

        <p className="max-w-2xl text-center text-lg text-slate-300 mb-12">
          現場帶你掌握剪輯工作和運用 AI 協助，從文案創作到影片剪輯，一個人也能打造屬於自已的風格影片。
        </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9ndjiIbhtVPcL0VMD6XCE9CnoF_Cf6LI_yN2IgymyvwnutQ/viewform" 
           target="_blank" className="px-12 py-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full font-bold text-2xl hover:scale-105 transition-transform">
          立即報名工作坊
        </a>
      </div>
    </div>
  );
}