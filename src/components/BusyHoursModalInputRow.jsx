import {
  StyledModalInput,
  StyledTableData,
  StyledTableRow,
} from "../styles/StyledBusyHoursModal";

export const BusyHoursModalInputRow = ({
  day,
  hoursLeft,
  busyHours,
  setBusyHours,
}) => {
  return (
    <StyledTableRow>
      <StyledTableData>{day}</StyledTableData>
      <StyledTableData>
        <StyledModalInput
          key={day}
          id={day}
          type="number"
          name={day}
          min={0}
          max={hoursLeft}
          required
          onInvalid={(e) => {
            e.target.setCustomValidity(
              `From 0 to ${hoursLeft} while using round integers. (that's what's left after sleeping)`
            );
          }}
          onChange={(e) => {
            setBusyHours({
              ...busyHours,
              [day]: e.target.value,
            });
            e.target.setCustomValidity(``);
          }}
        />
      </StyledTableData>
    </StyledTableRow>
  );
};
