'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import videos from '@/data/VideoGallery.json'; 


const VideoGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative mt-24 z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Video Highlights
        </span>
      </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelected(video.id)}
            className="cursor-pointer bg-black/70 border border-neutral-700 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden transition-transform hover:scale-105 hover:shadow-pink-500/20"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white text-lg font-medium">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl shadow-xl overflow-hidden animate-scale-in border border-purple-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-50 bg-neutral-800 text-white border border-neutral-600 hover:border-red-400 hover:text-red-400 rounded-full p-2 shadow-md transition duration-200"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            {/* Video */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selected}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
