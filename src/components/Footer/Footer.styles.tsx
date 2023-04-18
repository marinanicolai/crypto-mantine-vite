import React, { FC } from "react";
import styled from "styled-components";

interface ImgProps {
  src: string;
  alt?: string;
  width: string;
  // Define your prop types here, if any
}

const StyledImg = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 0.2rem;
`;

export const Img: FC<ImgProps> = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};
