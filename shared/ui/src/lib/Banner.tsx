import { ReactNode } from "react";
import styled from "styled-components"

const Container = styled.div`
  background-color: pink;
`;

export interface BannerProps {
  children: ReactNode
}

export const Banner = ({ children }: BannerProps) => (
  <Container>
    {children}
  </Container>
);

export default Banner;
