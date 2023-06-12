import styled from "styled-components";
export const StyledMainInformationInputDiv = styled.div`
  margin: 10px auto;
  width: 450px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledHeader = styled.h1`
  margin: 0;
  font-size: 50px;
  background: -webkit-linear-gradient(orange, red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledParagraph = styled.p`
  font-size: 25px;
`;

export const StyledArrow = styled.div`
  margin-top: 40px;
`;

export const StyledForm = styled.form`
  font-size: 20px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StyledInput = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 2px solid;
  border-color: transparent;
  border-image: linear-gradient(45deg, orange, red) 1;

  &:focus {
    outline: none;
  }
`;

export const StyledRadio = styled.input`
  appearance: none;
  margin-left: 15px;
  width: 15px;
  height: 15px;
  border: 2px solid orange;
  border-radius: 50%;
  outline: none;

  &:before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
  }
  &:checked:before {
    background: black;
  }
`;

export const StyledButton = styled.button`
  font-weight: 700;
  font-size: 15px;
`;
