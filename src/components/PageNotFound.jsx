import {
  StyledHeader,
  StyledImage,
  StyledLink,
  StyledMainPageNotFoundDiv,
} from "../styles/StyledPageNotFound";

import pageNotFound from "../assets/pageNotFound.png";

export const PageNotFound = () => {
  return (
    <>
      <StyledMainPageNotFoundDiv>
        <StyledImage src={pageNotFound} />
        <StyledHeader>
          Are you sure you will find something here? Do not worry, we've got
          your <StyledLink to="/">BACK</StyledLink>
        </StyledHeader>
        <a
          style={{ textDecoration: "none", color: "#e66131" }}
          href="https://storyset.com/web"
        >
          Web illustrations by Storyset
        </a>
      </StyledMainPageNotFoundDiv>
    </>
  );
};
