import React from "react";

import { useImageVisible } from "./use-is-img-loaded";

export interface ImgProps {
  src: string;
  width?: number | "100%";
  height?: number | "100%";
  lazy?: boolean;
  style?: React.CSSProperties;
  alt?: string;
  className?: string;
}

const LazyImg = (props: ImgProps) => {
  const {
    src,
    width = "100%",
    height = "100%",
    lazy = true,
    style,
    alt,
    className,
  } = props;
  const { elementRef, isLoaded } = useImageVisible(lazy);

  return (
    <img
      ref={elementRef}
      src={isLoaded ? src : GREY_IMAGE}
      className={className}
      alt={alt}
      style={{
        ...style,
        width,
        height,
      }}
    />
  );
};

export default LazyImg;
