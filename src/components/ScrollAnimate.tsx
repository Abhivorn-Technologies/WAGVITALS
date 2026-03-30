import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  threshold?: number;
}

const ScrollAnimate = ({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.15,
}: ScrollAnimateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationStyles: Record<string, { from: React.CSSProperties; to: React.CSSProperties }> = {
    "fade-in-up": {
      from: { opacity: 0, transform: "translateY(40px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-in": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    "scale-in": {
      from: { opacity: 0, transform: "scale(0.92)" },
      to: { opacity: 1, transform: "scale(1)" },
    },
    "slide-in-left": {
      from: { opacity: 0, transform: "translateX(-40px)" },
      to: { opacity: 1, transform: "translateX(0)" },
    },
    "slide-in-right": {
      from: { opacity: 0, transform: "translateX(40px)" },
      to: { opacity: 1, transform: "translateX(0)" },
    },
  };

  const style = animationStyles[animation] || animationStyles["fade-in-up"];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? style.to : style.from),
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
