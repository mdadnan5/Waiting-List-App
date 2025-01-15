
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

const Form = ({ waitingList, setWaitingList }) => {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Predefined valid invite codes
  const validInviteCodes = ["austin234", "alvin145", "karthik321"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    const newUser = { name: name.trim(), inviteCode: inviteCode.trim() || null };

    // Check if the invite code is valid
    if (inviteCode.trim() && validInviteCodes.includes(inviteCode.trim())) {
      // Group users with valid invite codes at the top
      const withInvite = waitingList.filter((user) => user.inviteCode && validInviteCodes.includes(user.inviteCode));
      const withoutInvite = waitingList.filter((user) => !user.inviteCode || !validInviteCodes.includes(user.inviteCode));

      // Add the new user to the end of the valid invite code group
      setWaitingList([...withInvite, newUser, ...withoutInvite]);
    } else {
      // Handle invalid or missing invite codes
      setError("Invalid or no invite code. You will join the general queue.");
      setTimeout(() => setError(""), 3000); // Clear error after 3 seconds

      // Add the user to the end of the general queue
      const withoutInvite = waitingList.filter((user) => !user.inviteCode || !validInviteCodes.includes(user.inviteCode));
      const withInvite = waitingList.filter((user) => user.inviteCode && validInviteCodes.includes(user.inviteCode));

      setWaitingList([...withInvite, ...withoutInvite, newUser]);
    }

    // Navigate to Page2
    navigate("/List");
  };

  return (
    <div className="form-container">
      <h1>Join the Waiting List</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter invite code (optional)"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Form;