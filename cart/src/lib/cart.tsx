import styled from 'styled-components';
import { Banner } from "@store/shared/ui";
import { Link } from "react-router-dom";

/* eslint-disable-next-line */
export interface CartProps {}

const StyledCart = styled.div`
  color: pink;
`;

export function Cart(props: CartProps) {
  return (
    <StyledCart>
      <Banner>Cart</Banner>
      <Link to="/">
        Home
      </Link>
    </StyledCart>
  );
}

export default Cart;
