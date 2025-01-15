import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [waitingList, setWaitingList] = useState([]); // Manage waiting list

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Form waitingList={waitingList} setWaitingList={setWaitingList} />}
          />
          <Route
            path="/List"
            element={<List waitingList={waitingList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
