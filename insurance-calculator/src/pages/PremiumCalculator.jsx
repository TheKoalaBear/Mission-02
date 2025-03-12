import React, { useState } from "react";
import styles from "./css/PremiumCalculator.module.css";

const PremiumCalculator = () => {
      const [carValue, setCarValue] = useState("");
      const [riskRating, setRiskRating] = useState("");

      const handleSubmit = async (e) => {
            e.preventDefault();

            if (!carValue.trim() || !riskRating.trim()) {
                  alert("No results from API 1 or API 2. Please try again.");
                  return;
            }

            try {
                  const response = await fetch("http://localhost:5000/calculate-quote", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ carValue, riskRating: riskRating }),
                  });

                  if (!response.ok) {
                        throw new Error("Failed to connect to the API");
                  }

                  const data = await response.json();
                  console.log("Premium Calculation Response:", data);

                  alert(`Premium Amount: ${data.premiumAmount}`);
            } catch (error) {
                  console.error("Error submitting API results:", error);
                  alert("An error occurred while connecting to the server. Please try again.");
            }
      };

      return (
            <div className={styles.body}>
                  <div className={styles.card}>
                        <div style={{ padding: "20px" }}>
                              <h1>Premium Calculator</h1>
                              <form onSubmit={handleSubmit}>
                                    <div>
                                          <label htmlFor="carValue">Car Value:</label>
                                          <input
                                                type="text"
                                                id="carValue"
                                                name="carValue"
                                                value={carValue}
                                                onChange={(e) => setCarValue(e.target.value)}
                                                disabled
                                                required
                                                placeholder="Result from API 1"
                                                style={{ width: "100%", height: "30px", fontSize: "20px" }}
                                          />
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                          <label htmlFor="riskRating">Risk Rating</label>
                                          <input
                                                type="text"
                                                id="riskRating"
                                                name="riskRating"
                                                value={riskRating}
                                                onChange={(e) => setRiskRating(e.target.value)}
                                                disabled
                                                required
                                                placeholder="Result from API 2"
                                                style={{ width: "100%", height: "30px", fontSize: "20px" }}
                                          />
                                    </div>
                                    <button type="submit" style={{ marginTop: "20px" }}>
                                          Calculate Premium
                                    </button>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default PremiumCalculator;
