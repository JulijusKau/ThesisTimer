import { useNavigate } from "react-router-dom";
import {
  StyledMainResultDiv,
  StyledResultWarning,
  StyledShowButton,
} from "../styles/StyledResult";
import { ResultCard } from "./ResultCard";
import { useState } from "react";
import { ResultModal } from "./ResultModal";

export const Result = ({
  busyHours,
  inputData,
  setBusyHours,
  setInputData,
}) => {
  const navigate = useNavigate();

  const [showScheduleCard, setShowScheduleCard] = useState("none");
  const [showScheduleButton, setShowScheduleButton] = useState("block");

  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);

  const returnFunction = () => {
    setBusyHours();
    setInputData({
      deadline: "",
      total_hours: "",
      sleep_time: "",
      exclude_holidays: "",
    });
    navigate("/");
  };

  const days = Object.keys(busyHours);
  const hoursNotForThesis = Object.values(busyHours);

  const busyHoursArray = hoursNotForThesis.map((string) => {
    return Number(string);
  });
  const daysTimesTwentyFour = 24 * days.length;
  const busyHoursPlusSleepingHours =
    inputData.sleep_time * days.length +
    busyHoursArray.reduce((partialSum, a) => partialSum + a, 0);

  const hoursPerDayAfterSleep = 24 - inputData.sleep_time;
  const hoursAfterSleepArray = Array(hoursNotForThesis.length).fill(
    hoursPerDayAfterSleep
  );

  const timeForThesisArray = hoursAfterSleepArray.map((item, index) => {
    return item - busyHoursArray[index];
  });

  const daysPlusFreeTimeObject = {};

  days.forEach((element, index) => {
    daysPlusFreeTimeObject[element] = timeForThesisArray[index];
  });

  const scheduleFunction = () => {
    setModalShow(true);
  };

  if (busyHours === "" || inputData === "") {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 0 0",
          }}
        >
          <button onClick={returnFunction} className="button">
            RETURN
          </button>
        </div>
        <StyledResultWarning>
          Are you sure you've entered the required data?
        </StyledResultWarning>
      </>
    );
  } else if (
    inputData.total_hours >
    daysTimesTwentyFour - busyHoursPlusSleepingHours
  ) {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 0 0",
          }}
        >
          <button onClick={returnFunction} className="button">
            RETURN
          </button>
        </div>
        <StyledResultWarning>
          I am sorry, but there is not enough time anymore for your thesis.
        </StyledResultWarning>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 0 0",
        }}
      >
        <button onClick={returnFunction} className="button">
          RETURN
        </button>
      </div>
      <StyledMainResultDiv>
        <StyledShowButton
          className="button hard"
          style={{ display: showScheduleButton }}
          onClick={() => {
            setShowScheduleCard("flex");
            setShowScheduleButton("none");
          }}
        >
          YOUR CALCULATED SCHEDULE
        </StyledShowButton>
        <ResultCard
          show={showScheduleCard}
          deadline={inputData.deadline}
          hoursItWillTake={parseInt(inputData.total_hours, 10)}
          sleepPerDay={parseInt(inputData.sleep_time, 10)}
          holidays={inputData.exclude_holidays}
          leftHours={daysTimesTwentyFour - busyHoursPlusSleepingHours}
          onClickScheduleFunction={scheduleFunction}
        />
        <ResultModal
          days={days}
          showModal={modalShow}
          totalHoursNeeded={Number(inputData.total_hours)}
          handleModalClose={handleModalClose}
          daysPlusFreeTimeObject={daysPlusFreeTimeObject}
        />
      </StyledMainResultDiv>
    </>
  );
};
