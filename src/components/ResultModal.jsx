import "bootstrap/dist/css/bootstrap.min.css";

import {
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalTitle,
  StyledTable,
  StyledTableBody,
  StyledTableHeading,
  StyledTableRow,
} from "../styles/StyledBusyHoursModal";

export const ResultModal = ({
  showModal,
  handleModalClose,
  totalHoursNeeded,
  daysPlusFreeTimeObject,
}) => {
  let count = 0;
  let lastValue = 0;
  let childKey = 0;
  return (
    <>
      <StyledModal
        style={{ color: "black" }}
        show={showModal}
        onHide={handleModalClose}
      >
        <StyledModalHeader>
          <StyledModalTitle>Here is your schedule</StyledModalTitle>
        </StyledModalHeader>
        <StyledModalBody>
          <StyledTable>
            <StyledTableBody>
              <StyledTableRow>
                <StyledTableHeading>Date</StyledTableHeading>
                <StyledTableHeading>
                  Hours to work on the thesis
                </StyledTableHeading>
              </StyledTableRow>
              {Object.entries(daysPlusFreeTimeObject).map(([key, value]) => {
                lastValue = value;

                if (totalHoursNeeded > count) {
                  count += value;
                  if (totalHoursNeeded > count) {
                    return (
                      <tr key={childKey++}>
                        <td>{key}</td>
                        <td>
                          Spend <b>{value}</b> hours on your thesis on this day
                        </td>
                      </tr>
                    );
                  } else if (totalHoursNeeded < count) {
                    return (
                      <tr key={childKey++}>
                        <td>{key}</td>
                        <td>
                          Spend <b>{totalHoursNeeded - (count - lastValue)}</b>{" "}
                          hours on your thesis on this day
                        </td>
                      </tr>
                    );
                  }
                }

                return (
                  <tr key={childKey++}>
                    <td>{key}</td>
                    <td>Congratulations! You have finished your thesis!</td>
                  </tr>
                );
              })}
            </StyledTableBody>
          </StyledTable>
        </StyledModalBody>
        <StyledModalFooter>
          <StyledModalButton variant="primary" onClick={handleModalClose}>
            Close
          </StyledModalButton>
        </StyledModalFooter>
      </StyledModal>
    </>
  );
};
