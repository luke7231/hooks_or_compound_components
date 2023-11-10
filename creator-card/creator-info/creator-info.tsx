/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Children, isValidElement } from "react";
import styled from "styled-components";

import CreatorName from "./sub-components/creator-name";
import CreatorBody from "./sub-components/creator-body";
import CreatorDescription from "./sub-components/creator-description";

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CreatorNameType = (<CreatorName />).type;
const CreatorBodyType = (<CreatorBody userHeight="" userWeight="" />).type;
const CreatorDescriptionType = (<CreatorDescription />).type;

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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CreatorInfo = ({ children, style, onClick }: LayoutProps) => {
  const creatorName = getElement(children, CreatorNameType);
  const creatorBody = getElement(children, CreatorBodyType);
  const creatorDescription = getElement(children, CreatorDescriptionType);

  return (
    <Wrapper style={style} onClick={onClick}>
      {creatorName}
      {creatorBody}
      {creatorDescription}
      {children}
    </Wrapper>
  );
};

export default Object.assign(CreatorInfo, { CreatorName, CreatorBody, CreatorDescription });
