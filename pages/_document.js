import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [url, setUrl] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>Youtube Thumbnail Downloader</title>
        <meta name="description" content="Download YouTube thumbnails easily" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600 mb-8">
          Download high-quality thumbnails from YouTube videos.
        </p>

        <form onSubmit={handleDownload} className="w-full max-w-md flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Download Thumbnails
          </button>
        </form>
      </main>
    </div>
  );
}