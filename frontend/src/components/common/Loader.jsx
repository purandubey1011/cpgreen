import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(() => !window.sessionStorage.getItem("cp-loader-seen"));

  useEffect(() => {
    if (!visible) return undefined;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("cp-loader-seen", "true");
      setVisible(false);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      data-loader
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f3f3f3] transition-opacity duration-500"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/home/navbar/logo.png"
          alt="CP Greens"
          className="h-12 w-auto object-contain"
        />
        <div className="h-px w-36 overflow-hidden bg-[#704633]/20">
          <div className="h-full w-full origin-left animate-[loader-line_0.9s_cubic-bezier(0.16,1,0.3,1)_infinite] bg-[#704633]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
