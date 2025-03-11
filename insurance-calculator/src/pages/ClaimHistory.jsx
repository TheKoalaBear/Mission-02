import React, { useState } from "react";
import styles from "./css/ClaimHistory.module.css";

const ClaimHistory = () => {
  const [claimReason, setClaimReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!claimReason.trim()) {
      alert("Please enter a claim reason before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/evaluate-risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: claimReason }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the API");
      }

      const data = await response.json();
      console.log("Risk Evaluation Response:", data);

      alert(`Risk Level: ${data.riskLevel}\nRisk Rating: ${data.riskRating}`);
    } catch (error) {
      console.error("Error submitting claim reason:", error);
      alert(
        "An error occurred while connecting to the server. Please try again."
      );
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div style={{ padding: "20px" }}>
          <h1>Claim History</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="claimReason">Claim Reason:</label>
              <textarea
                id="claimReason"
                name="claimReason"
                value={claimReason}
                onChange={(e) => setClaimReason(e.target.value)}
                required
                style={{ width: "100%", height: "100px" }}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClaimHistory;
