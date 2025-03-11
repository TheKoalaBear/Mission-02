import React, { useState } from "react";
import styles from "./css/DiscountRate.module.css";

const DiscountRate = () => {
  const [premiumPrice, setPremiumPrice] = useState("");
  const [licenceIssueDate, setLicenceIssueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!premiumPrice.trim() || !licenceIssueDate.trim()) {
      alert("Please fill out both Premium Price and Licence Issue Date before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/calculate-discount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ premiumPrice, licenceIssueDate }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the API");
      }

      const data = await response.json();
      console.log("Discount Rate Calculation Response:", data);

      alert(`Discount Rate: ${data.discountRate}`);
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert(
        "An error occurred while connecting to the server. Please try again."
      );
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div style={{ padding: "20px" }}>
          <h1>Discount Rate Calculator</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="premiumPrice">Premium Price:</label>
              <input
                type="text"
                id="premiumPrice"
                name="premiumPrice"
                value={premiumPrice}
                onChange={(e) => setPremiumPrice(e.target.value)}
                required
                placeholder="Enter premium price"
                style={{ width: "100%", height: "30px", fontSize: "20px" }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="licenceIssueDate">Licence Issue Date:</label>
              <input
                type="date"
                id="licenceIssueDate"
                name="licenceIssueDate"
                value={licenceIssueDate}
                onChange={(e) => setLicenceIssueDate(e.target.value)}
                required
                style={{ width: "100%", height: "30px", fontSize: "20px" }}
              />
            </div>
            <button type="submit" style={{ marginTop: "20px" }}>
              Calculate Discount
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountRate;
