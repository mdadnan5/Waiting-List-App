import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/List.css";

const List = ({ waitingList }) => {
  const navigate = useNavigate();

  return (
    <div className="waiting-list-container">
      <h1>Your Waiting List Position</h1>
      {waitingList.length > 0 ? (
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Invite Code</th>
                <th>Wait Time (Days)</th>
              </tr>
            </thead>
            <tbody>
              {waitingList.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.inviteCode || "N/A"}</td>
                  <td>{index + 1} day(s)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>The waiting list is empty. Please go back and add your details.</p>
      )}
      <div className="button-container">
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default List;
