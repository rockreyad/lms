import React from "react";

const MarketingVideo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-slate-800">
      <iframe
        className="aspect-video w-full rounded-lg shadow-lg shadow-cyan-800/20"
        src="https://www.youtube.com/embed/a4qymb4c57g?si=TJUjsvqP8m9qXEo-"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
export default MarketingVideo;
