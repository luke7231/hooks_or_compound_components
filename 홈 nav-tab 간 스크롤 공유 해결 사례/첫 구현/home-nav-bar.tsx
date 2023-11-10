import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  background: white;
  opacity: 0.95;
  z-index: var(--nav-index);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-top: 5px;
  border-bottom: 1px solid #f4f4f4;
  border-left: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;

  @media (min-width: 1080px) {
    max-width: 650px;
  }
`;

const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  margin-right: 16px;
  cursor: pointer;

  &:first-child {
    margin-left: 24px;
  }
`;

const Button = styled.div<{ active: boolean }>`
  position: relative;
  font-style: normal;
  font-weight: 700;
  padding-bottom: 12px;
  font-size: 15px;
  line-height: 20px;
  color: #bbb;
  ${({ active }) =>
    active &&
    `
    color: #111;
    
    ::after {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 2px;
      content: "";
      border-bottom: 2px solid #111;
    }
  `}
`;

export type NavButtonName = "TREND" | "RECOMMEND" | "FOLLOWING" | "HOT";
export interface NavButtonType {
  name: NavButtonName;
  description: string;
}
export const NAV_TAP_GROUP: Record<NavButtonName, NavButtonType> = {
  // 추천 탭
  RECOMMEND: {
    name: "RECOMMEND",
    description: "recommend_tab",
  },
  // 트렌드 탭
  TREND: {
    name: "TREND",
    description: "trend",
  },
  // 스타일랭킹 탭
  HOT: {
    name: "HOT",
    description: "ranking",
  },
  // 팔로잉 탭
  FOLLOWING: {
    name: "FOLLOWING",
    description: "following",
  },
};

const HomeTabNavBar = () => {
  const { tab, updateTab } = useHomeNavTab(); // 전역 상태 관리 훅스입니다.

  const handleClick = (
    selectedButton: NavButtonName,
    prevButton: NavButtonName
  ) => {
    if (tab.name === selectedButton) {
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
      return;
    }
    sessionStorage.setItem(`${prevButton}-tab-scroll`, String(window.scrollY));
    updateTab(selectedButton);
  };

  // 탭마다 스크롤을 분리하고 기억하기 위한 effect 입니다.
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(`${tab.name}-tab-scroll`);
    if (savedScroll) {
      window.scrollTo({ top: Number(savedScroll) });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [tab]);

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

  return (
    <Container>
      {Object.values(NAV_TAP_GROUP).map((navButton) => {
        return (
          <ButtonWrap key={navButton.name}>
            <Button
              active={tab.name === navButton.name}
              onClick={() => handleClick(navButton.name, tab.name)}
            >
              {/* 번역을 적용해서 나갑니다 실제로는 */}
              {navButton.description}
            </Button>
          </ButtonWrap>
        );
      })}
    </Container>
  );
};

export default HomeTabNavBar;
