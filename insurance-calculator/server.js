import express from "express";
import calculateQuote from "./calculateQuote.js";

const app = express();

// Middleware
app.use(express.json());

// API
app.post("/api/calculate-quote", (req, res) => {
      const { carValue, riskRating } = req.body;

      console.log(" Recieved request ", req.body);

      // required inputs from user
      if (typeof carValue === "undefined" || typeof riskRating === "undefined") {
            console.log("Missing car value or risk rating");
            return res.status(400).json({ error: "Missing car value or risk rating" });
      }

      // Call your function and send the result
      const result = calculateQuote(carValue, riskRating);

      // If the result contains an error, return it
      if (result.error) {
            console.log("Error in calc", result.error);
            return res.status(400).json(result);
      }

      console.log("Successful calc result", result);

      return res.status(200).json(result);
});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
