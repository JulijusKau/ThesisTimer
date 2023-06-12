import "./App.css";
import { Route, Routes } from "react-router-dom";
import { InformationInput } from "./components/InformationInput";
import { PageNotFound } from "./components/PageNotFound";
import { Result } from "./components/Result";
import { useState } from "react";
import "./styles/arrowAnimation.css";
import "./styles/buttonAnimation.scss";
import "./styles/borderStyle.scss";

function App() {
  const [busyHours, setBusyHours] = useState("");
  const [inputData, setInputData] = useState({
    deadline: "",
    total_hours: "",
    sleep_time: "",
    exclude_holidays: "",
  });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <InformationInput
              setBusyHours={setBusyHours}
              busyHours={busyHours}
              inputData={inputData}
              setInputData={setInputData}
            />
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route
          path="/result"
          element={
            <Result
              setBusyHours={setBusyHours}
              busyHours={busyHours}
              inputData={inputData}
              setInputData={setInputData}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
