/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Children, isValidElement } from "react";
import styled from "styled-components";

import CreatorThumbnail from "./creator-thumbnail";
import CreatorInfo from "./creator-info/creator-info";

interface LayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CreatorThumbnailType = (<CreatorThumbnail imageUrl="" />).type;
const CreatorInfoType = (<CreatorInfo />).type;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getElement = (children: React.ReactNode, nodeType: any) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === nodeType
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

const CreatorCard = ({ children, style, onClick }: LayoutProps) => {
  const creatorThumbnail = getElement(children, CreatorThumbnailType);
  const creatorInfo = getElement(children, CreatorInfoType);

  return (
    <Wrapper style={style} onClick={onClick}>
      {creatorThumbnail}
      {creatorInfo}
      {children}
    </Wrapper>
  );
};

export default Object.assign(CreatorCard, { CreatorThumbnail, CreatorInfo });
