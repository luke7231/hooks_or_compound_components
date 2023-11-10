import React from "react";
import styled from "styled-components";

interface Props {
  fontSize?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const Wrap = styled.div``;

const CreatorName = ({ style, children }: Props) => {
  return <Wrap style={style}>{children}</Wrap>;
};
export default CreatorName;
