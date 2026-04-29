import { useState, useEffect } from "react";
import wagvitalsLogo from "@/assets/wagvitals-logo.png";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center mb-6">
        <img
          src={wagvitalsLogo}
          alt="WagVitals"
          className="h-16 mb-2 animate-pulse"
        />
        <p className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase italic animate-fade-in">
          The Pet Operating System
        </p>
      </div>
      <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-gradient-gold rounded-full animate-loader-bar" />
      </div>
    </div>
  );
};

export default PageLoader;
