import React from "react";
import styled from "styled-components";

const Wrap = styled.div``;

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CreatorDescription = ({ style, children }: Props) => {
  return <Wrap style={style}>{children}</Wrap>;
};
export default CreatorDescription;
