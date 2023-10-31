import React from "react";

const MarketingVideo = () => {
  return (
    <div className="min-h-max lg:min-h-screen flex flex-col items-center justify-center px-6 py-24 lg:px-10 bg-slate-800 space-y-10">
      <h3 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-100 text-center">
        Watch how <span className="text-cyan-400">Tangnest LMS</span> works
      </h3>
      <iframe
        className="aspect-video w-full rounded-lg shadow-lg shadow-cyan-800/20"
        src="https://www.youtube.com/embed/a4qymb4c57g?si=TJUjsvqP8m9qXEo-"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
export default MarketingVideo;
