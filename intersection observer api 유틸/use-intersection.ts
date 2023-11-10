import React, { useState, useRef, useEffect } from "react";

interface Props {
  options?: IntersectionObserverInit;
  once?: boolean;
}

const useIntersection = <T extends Element>({ options, once }: Props) => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (once) {
      if (entry.isIntersecting) setIsVisible(true);
    } else {
      setIsVisible(entry.isIntersecting);
    }
  }, options);

  useEffect(() => {
    // 관찰 시작
    if (elementRef.current) observer.observe(elementRef.current);

    // 관찰 종료
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};
export default useIntersection;
