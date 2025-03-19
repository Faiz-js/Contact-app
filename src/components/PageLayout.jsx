import React from "react";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-500 flex items-center justify-center">
      <div className="w-[425px] h-screen md:h-[700px] bg-stone-800 overflow-hidden shadow-2xl supports-[height:100dvh]:h-[100dvh] p-4 min-[425px]:rounded-4xl">
        {children}
      </div>
    </div>
  );
}
