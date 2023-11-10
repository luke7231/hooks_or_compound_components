import React, { useEffect, useLayoutEffect } from "react";

const useHomeNavScroll = () => {
  const { tab, updateTab } = useHomeNavTab(); // 전역 상태 관리 훅스입니다.

  const saveScroll = (prevButton: string) => {
    sessionStorage.setItem(`${prevButton}-tab-scroll`, String(window.scrollY));
  };

  // 탭간 스크롤 꺼내서 적용하는 effect
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(`${tab.name}-tab-scroll`);
    if (savedScroll) {
      window.scrollTo({ top: Number(savedScroll) });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [tab]);

  // 스크롤 초기화 effect
  useLayoutEffect(() => {
    const tabs = ["RECOMMEND", "TREND", "HOT", "FOLLOWING"];
    const handleBeforeUnload = () => {
      // 페이지가 새로고침되거나 닫힐 때 sessionStorage > 스크롤 기억 초기화
      tabs.map((tabName) => sessionStorage.removeItem(`${tabName}-tab-scroll`));
    };

    window.addEventListener("pagehide", handleBeforeUnload);
    return () => {
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  });

  return { saveScroll };
};
export default useHomeNavScroll;
