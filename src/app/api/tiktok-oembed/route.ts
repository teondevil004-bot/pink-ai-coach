import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  try {
    // TikTok oEmbed API endpoint
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`TikTok API returned ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      thumbnail_url: data.thumbnail_url || null,
      title: data.title || null,
      author_name: data.author_name || null,
    });
  } catch (error) {
    console.error('Error fetching TikTok oEmbed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch TikTok data', thumbnail_url: null },
      { status: 500 }
    );
  }
}

