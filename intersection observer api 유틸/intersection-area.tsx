import React, { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  onIntersectionStart: () => void;
  className?: string;
}

const IntersectionArea = ({
  children,
  onIntersectionStart,
  className,
}: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) onIntersectionStart();
  });

  useEffect(() => {
    // 관찰 시작
    if (elementRef.current) observer.observe(elementRef.current);

    // 관찰 종료
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
export default IntersectionArea;
