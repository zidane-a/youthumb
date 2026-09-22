import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [url, setUrl] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    // منطق جلب الصور هنا
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>YouTube Thumbnail Downloader - Download HD & 4K Images</title>
        <meta name="description" content="Free online tool to download YouTube video thumbnails in HD, HQ, and 4K resolution easily." />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600 mb-8">
          Download high-quality thumbnails from YouTube videos.
        </p>

        <form onSubmit={handleDownload} className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download Thumbnails
          </button>
        </form>

        {/* SEO Content Section Added Below */}
        <section className="mt-16 max-w-2xl text-left text-gray-700">
          <h2 className="text-2xl font-semibold mb-3">Why Use Our YouTube Thumbnail Downloader?</h2>
          <p className="mb-4">
            Our free online tool allows creators, marketers, and video enthusiasts to extract and download YouTube video thumbnails instantly. Whether you need high-definition (HD), 720p, or 1080p images, our platform lets you grab them with a single click. No software installation or registration is required.
          </p>
          <h2 className="text-2xl font-semibold mb-3">How to Download YouTube Thumbnails in HD?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Copy the public URL of the YouTube video you like.</li>
            <li>Paste the link into the input box above.</li>
            <li>Click the Download button to view available resolutions.</li>
            <li>Save your preferred thumbnail image directly to your device.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}