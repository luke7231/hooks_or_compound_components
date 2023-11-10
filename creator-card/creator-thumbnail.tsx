import React from "react";
import styled from "styled-components";

const Wrap = styled.div``;
const Image = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "48px"};
  height: ${(props) => props.height || "48px"};
  border-radius: 50%;
  object-fit: cover;
`;

interface Props {
  imageUrl: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

const CreatorThumbnail = ({
  imageUrl,
  children,
  style,
  width,
  height,
}: Props) => {
  return (
    <Wrap style={style}>
      <Image src={imageUrl} width={width} height={height} />
      {children}
    </Wrap>
  );
};
export default CreatorThumbnail;
