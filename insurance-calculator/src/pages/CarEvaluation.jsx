import React, { useState } from "react";
import styles from "./css/CarEvaluation.module.css";

const CarEvaluation = () => {
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carModel.trim() || !carYear.trim()) {
      alert("Please fill out both Car Model and Car Year before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/ADD YOUR END POINT HERE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ carModel, carYear }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to connect to the API");
      }

      const data = await response.json();
      console.log("Car Evaluation Response:", data);

      alert(`Risk Level: ${data.riskLevel}\nRisk Rating: ${data.riskRating}`);
    } catch (error) {
      console.error("Error submitting car information:", error);
      alert(
        "An error occurred while connecting to the server. Please try again."
      );
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div style={{ padding: "20px" }}>
          <h1>Car Evaluation Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="carModel">Car Model:</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                required
                placeholder="Enter car model"
                style={{ width: "100%", height: "30px", fontSize: "20px" }}
              />
            </div>
            <div>
              <label htmlFor="carYear">Car Year:</label>
              <input
                type="number"
                id="carYear"
                name="carYear"
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
                required
                placeholder="Enter car year"
                min="1900"
                max="2099"
                style={{ width: "100%", height: "30px", fontSize: "20px" }}
              />
            </div>
            <button type="submit" style={{ marginTop: "20px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarEvaluation;
