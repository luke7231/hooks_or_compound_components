import { useEffect, useState } from "react";

import useIntersection from "./intersection observer api 유틸/use-intersection";

const VIEW_PORT_AREA = "0 0 500px 0";

export const useImageVisible = (lazy: boolean) => {
  const { elementRef, isVisible } = useIntersection<HTMLImageElement>({
    options: {
      rootMargin: VIEW_PORT_AREA,
    },
    once: true,
  });
  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
  }, [isVisible]);

  return { elementRef, isLoaded };
};
