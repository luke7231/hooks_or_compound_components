import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
  userHeight?: string | number | null;
  userWeight?: string | number | null;
  isHideWeight?: boolean | null;
}
const Wrap = styled.div``;
const BodySizeTextWrap = styled.div`
  color: #999;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 11px;
`;
const Height = styled.div``;
const Weight = styled.div``;
const Dot = styled.span`
  width: 2px;
  height: 2px;
  margin: 0 4px;
  background: #999;
  border-radius: 1px;
`;
const Body = ({ style, userHeight, userWeight, isHideWeight }: Props) => {
  return (
    <Wrap style={style}>
      <BodySizeTextWrap>
        <Height>{userHeight + "cm"}</Height>
        {!!userWeight && !isHideWeight && <Dot />}
        {!!userWeight && !isHideWeight && <Weight>{userWeight + "kg"}</Weight>}
      </BodySizeTextWrap>
    </Wrap>
  );
};
export default Body;
