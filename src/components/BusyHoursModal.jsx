import "bootstrap/dist/css/bootstrap.min.css";

import {
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalFooter,
  StyledModalForm,
  StyledModalHeader,
  StyledModalTitle,
  StyledTable,
  StyledTableBody,
  StyledTableHeading,
  StyledTableRow,
} from "../styles/StyledBusyHoursModal";
import { BusyHoursModalInputRow } from "./BusyHoursModalInputRow";

export const BusyHoursModal = ({
  showModal,
  handleModalClose,
  handleModalConfirmation,
  selectedDays,
  hoursAfterSleep,
  busyHours,
  setBusyHours,
}) => {
  return (
    <>
      <StyledModal
        style={{ color: "black" }}
        show={showModal}
        onHide={handleModalClose}
      >
        <StyledModalForm onSubmit={handleModalConfirmation}>
          <StyledModalHeader>
            <StyledModalTitle>
              Enter the time you will be busy with other stuff for the input
              dates
            </StyledModalTitle>
          </StyledModalHeader>
          <StyledModalBody>
            <StyledTable>
              <StyledTableBody>
                <StyledTableRow>
                  <StyledTableHeading>Date</StyledTableHeading>
                  <StyledTableHeading>Busy Hours</StyledTableHeading>
                </StyledTableRow>
                {selectedDays.map((day) => (
                  <BusyHoursModalInputRow
                    key={day}
                    day={day}
                    hoursLeft={hoursAfterSleep}
                    busyHours={busyHours}
                    setBusyHours={setBusyHours}
                  />
                ))}
              </StyledTableBody>
            </StyledTable>
          </StyledModalBody>
          <StyledModalFooter>
            <StyledModalButton variant="secondary" onClick={handleModalClose}>
              Close
            </StyledModalButton>
            <StyledModalButton variant="primary" type="submit">
              Set the times
            </StyledModalButton>
          </StyledModalFooter>
        </StyledModalForm>
      </StyledModal>
    </>
  );
};
