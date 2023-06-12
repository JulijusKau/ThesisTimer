import {
  StyledButton,
  StyledCard,
  StyledHeading,
  StyledParagraph,
} from "../styles/StyledResultCard";

export const ResultCard = ({
  show,
  deadline,
  leftHours,
  hoursItWillTake,
  sleepPerDay,
  holidays,
  onClickScheduleFunction,
}) => {
  return (
    <StyledCard
      className="border full-withradius schedule-border"
      style={{ display: show }}
    >
      <div style={{ width: "100%" }}>
        {" "}
        <StyledHeading style={{ color: "red" }}>THE PLAN</StyledHeading>
      </div>
      <StyledParagraph>Deadline : {deadline}</StyledParagraph>
      <StyledParagraph>
        Hours it should take : {hoursItWillTake}
      </StyledParagraph>
      <StyledParagraph>Sleep hours/day : {sleepPerDay}</StyledParagraph>
      <StyledParagraph>
        Hours left to work on the thesis : {leftHours}
      </StyledParagraph>

      <StyledParagraph>
        {holidays === "Yes"
          ? "Excluded public holidays"
          : "Public holidays not excluded"}
      </StyledParagraph>
      <StyledButton
        className="button schedule"
        onClick={onClickScheduleFunction}
      >
        MY RECOMMENDED SCHEDULE
      </StyledButton>
    </StyledCard>
  );
};
