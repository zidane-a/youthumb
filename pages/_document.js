import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState(null);

  // دالة باش نجبدو ID ديال الفيديو من الرابط
  const handleGetThumbnail = () => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);
    if (match && match[2].length === 11) {
      setVideoId(match[2]);
    } else {
      alert('Please enter a valid YouTube video link');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Head>
        <title>YouTube Thumbnail Downloader - Save YT Video Thumbnails</title>
        <meta name="description" content="Download YouTube thumbnails in Full HD, HD, and SD formats easily and for free." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center">
        
        {/* Search Section */}
        <div className="w-full max-w-lg mb-10 text-center">
          <div className="bg-green-600 text-white font-bold py-1 px-4 rounded-t-md inline-block mb-[-4px] relative z-10 text-sm">
            Enter the link of a YouTube video below
          </div>
          <div className="flex border-2 border-green-600 rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Copy & Paste Any YouTube Video Link Here"
              className="flex-1 px-4 py-2 outline-none"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button 
              onClick={handleGetThumbnail}
              className="bg-green-600 text-white px-6 font-semibold hover:bg-green-700 transition"
            >
              Get
            </button>
          </div>
          
          {/* Social Icons Placeholder */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer hover:opacity-80"></span>
            <span className="w-8 h-8 rounded-full bg-blue-400 cursor-pointer hover:opacity-80"></span>
            <span className="w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:opacity-80"></span>
            <span className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:opacity-80"></span>
          </div>
        </div>

        {/* Thumbnail Results Section */}
        {videoId && (
          <div className="w-full flex flex-col items-center gap-8 mb-16">
            <div className="w-full max-w-2xl text-center">
              <h3 className="font-bold text-lg mb-2">Full HD</h3>
              <a href={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded mb-2 hover:bg-green-700">Download</a>
              <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Full HD Thumbnail" className="w-full rounded-md shadow-md border" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
              <div className="w-full sm:w-1/2 text-center">
                <h3 className="font-bold text-lg mb-2">Medium</h3>
                <a href={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded mb-2 hover:bg-green-700">Download</a>
                <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt="Medium Thumbnail" className="w-full rounded-md shadow-md border" />
              </div>
              <div className="w-full sm:w-1/2 text-center">
                <h3 className="font-bold text-lg mb-2">Small</h3>
                <a href={`https://img.youtube.com/vi/${videoId}/default.jpg`} target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded mb-2 hover:bg-green-700">Download</a>
                <img src={`https://img.youtube.com/vi/${videoId}/default.jpg`} alt="Small Thumbnail" className="w-full rounded-md shadow-md border" />
              </div>
            </div>
          </div>
        )}

        {/* SEO Text Section */}
        <article className="w-full text-left text-sm text-gray-700 space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">YouTube Thumbnail Downloader</h1>
            <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
              ▷ Save YT Video Thumbnails
            </h2>
            <p className="mt-4 text-gray-600 text-xs">
              publicly available Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size.
            </p>
          </div>

          <h3 className="text-lg font-bold">What is the use of this YouTube Thumbnail Grabber website?</h3>
          <p>People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos. That can be used in presentation, animation work or many other activities.</p>

          <h3 className="text-lg font-bold">How to use this YouTube thumbnail downloader website?</h3>
          <p>I have shared some of screenshot in which I have guided you how you can use this YouTube downloader website. It's quite easy first step is you just copy any YouTube link whom thumbnail you want. Now paste that url in input box, the moment you paste that link it's automatically going to generate different size of thumbnails for you. Now click on thumbnail download button and it's going to automatically downloaded in your system.</p>

          <h3 className="text-lg font-bold">Is it legal to download YouTube thumbnails?</h3>
          <p>You may download thumbnails from publicly available YouTube videos for personal or educational use. Thumbnails remain the property of their respective creators, and you should obtain permission before reuse. Please always follow YouTube's Terms of Service.</p>
          
          <h3 className="text-lg font-bold">Is there any Copyright risk on YouTube Thumbnails?</h3>
          <p>Whatever youtube screenshot you are downloading a copyright of respective on owner of that videos. If you want to use it in your work then you should ask for permission.</p>
        </article>

      </main>
    </div>
  );
}