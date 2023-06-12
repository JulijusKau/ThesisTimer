import { Link } from "react-router-dom";
import styled from "styled-components";
export const StyledMainPageNotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  margin: auto;
  width: 40%;
`;

export const StyledHeader = styled.h1``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: red;
`;
