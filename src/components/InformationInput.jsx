import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledArrow,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledMainInformationInputDiv,
  StyledParagraph,
  StyledRadio,
} from "../styles/StyledInformationInput";
import { BusyHoursModal } from "./BusyHoursModal";

export const InformationInput = ({
  setBusyHours,
  busyHours,
  inputData,
  setInputData,
}) => {
  const date = new Date();

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const currentDate = `${currentYear}-${
    currentMonth < 10 ? "0" + currentMonth : currentMonth
  }-${currentDay < 10 ? "0" + currentDay : currentDay}`;

  const [selectedDates, setSelectedDates] = useState([]);

  const hoursPerDayAfterSleep = 24 - inputData.sleep_time;

  // PUBLIC HOLIDAYS IN LITHUANIA FOR 2023 //
  const publicHolidays = [
    "2023-06-24",
    "2023-07-06",
    "2023-08-15",
    "2023-11-01",
    "2023-11-02",
    "2023-12-24",
    "2023-12-25",
    "2023-12-26",
  ];
  //////////////////////
  //////////////////////
  //////////////////////

  // DAYS ARRAY EXCLUDING FIRST (CURRENT DATE) AND LAST (DEADLINE) DATES.
  // WHILE EXCLUDING HOLIDAYS DEPENDING ON INPUTDATA VALUES /////

  const getDaysArray = function (s, e) {
    for (
      var a = [], d = new Date(s);
      d <= new Date(e);
      d.setDate(d.getDate() + 1)
    ) {
      a.push(new Date(d).toLocaleDateString());
    }
    a.shift();
    a.pop();
    if (inputData.exclude_holidays === "Yes") {
      a = a.filter((val) => !publicHolidays.includes(val));
      return setSelectedDates(a);
    }

    return setSelectedDates(a);
  };

  //////////////////
  //////////////////
  //////////////////

  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const navigate = useNavigate();

  const [radioValidity, setRadioValidity] = useState(
    "Please, check if I should exclude public holidays or not when counting the time"
  );

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (event) => {
    console.log(event.target.name + " " + event.target.value);
    setInputData({
      ...inputData,

      [event.target.name]: Math.floor(event.target.value),
    });
    // IF THE PERSON CHANGES ANY VALUES AFTER SELECTING BUSY HOURS
    setBusyHours();
    // IF THE PERSON CHANGES ANY VALUES AFTER SELECTING BUSY HOURS
  };

  return (
    <StyledMainInformationInputDiv className="full-withradius border">
      <StyledHeader>ThesisTimer</StyledHeader>
      <StyledParagraph>
        *Beep Boop* In order for me to help you - fill out the information below
      </StyledParagraph>
      <StyledArrow className="arrow">
        <span />
        <span />
        <span />
      </StyledArrow>
      <StyledForm onSubmit={onHandleSubmit}>
        <StyledInput
          name="deadline"
          type="date"
          title="Enter the deadline of your thesis"
          placeholder="Deadline"
          required
          min={currentDate}
          onInvalid={(e) => {
            e.target.setCustomValidity("Please, enter the deadline");
          }}
          onChange={(event) => {
            setInputData({
              ...inputData,
              deadline: event.target.value,
            });
            setBusyHours();
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
        <StyledInput
          name="total_hours"
          type="number"
          title="Enter how many hours do you think it will take you"
          min={1}
          placeholder="Total hours for thesis"
          required
          onInvalid={(e) => {
            e.target.setCustomValidity("Minimum value is 1");
          }}
          onChange={handleOnChange}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
        <StyledInput
          name="sleep_time"
          type="number"
          title="Enter how many hours/day you'd like to sleep during this period"
          min={1}
          max={23}
          placeholder="Sleep time/day"
          required
          onInvalid={(e) => {
            e.target.setCustomValidity(
              "Minimum value is 1 maximum value is 23"
            );
          }}
          onChange={handleOnChange}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          Exclude public holidays?
          <div>
            <StyledRadio
              type="radio"
              name="exclude_holidays"
              title="Should I exclude public holidays when counting the time?"
              value="Yes"
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(radioValidity);
              }}
              onInput={() => {
                setRadioValidity("");
              }}
              onChange={(event) => {
                setInputData({
                  ...inputData,
                  exclude_holidays: event.target.value,
                });
                setBusyHours();
              }}
            />{" "}
            Yes
            <StyledRadio
              type="radio"
              name="exclude_holidays"
              value="No"
              title="Should I exclude public holidays when counting the time?"
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(radioValidity);
              }}
              onInput={() => {
                setRadioValidity("");
              }}
              onChange={(event) => {
                setInputData({
                  ...inputData,
                  exclude_holidays: event.target.value,
                });
                setBusyHours();
              }}
            />{" "}
            No
          </div>
        </div>
        <StyledButton
          className="button"
          onClick={(e) => {
            e.preventDefault();
            if (
              inputData.sleep_time === "" ||
              inputData.total_hours === "" ||
              inputData.deadline === "" ||
              inputData.exclude_holidays === ""
            ) {
              alert(
                "Please input the deadline, sleep time and choose public holidays"
              );
            } else {
              getDaysArray(currentDate, inputData.deadline);
              setModalShow(true);
            }
          }}
        >
          INPUT YOUR BUSY HOURS
        </StyledButton>

        <StyledButton
          className="button"
          onClick={() => {
            if (busyHours === undefined || busyHours === "") {
              alert("Please fill out the data and select your busy hours");
            } else {
              alert("Congratulations lets calculate");
              navigate("/result");
            }
          }}
        >
          CALCULATE
        </StyledButton>
      </StyledForm>
      <BusyHoursModal
        busyHours={busyHours}
        setBusyHours={setBusyHours}
        selectedDays={selectedDates}
        showModal={modalShow}
        hoursAfterSleep={hoursPerDayAfterSleep}
        handleModalClose={() => {
          setBusyHours();
          handleModalClose();
        }}
        handleModalConfirmation={(e) => {
          e.preventDefault();
          setModalShow(false);
        }}
      />
    </StyledMainInformationInputDiv>
  );
};
