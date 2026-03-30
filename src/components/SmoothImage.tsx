import { useState, useEffect, ImgHTMLAttributes } from "react";

interface SmoothImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const SmoothImage = ({ src, alt, className = "", wrapperClassName = "", ...props }: SmoothImageProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-inherit" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default SmoothImage;
