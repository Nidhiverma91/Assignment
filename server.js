// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Simulated in-memory database
const enrollmentData = [];

app.use(bodyParser.json());

app.post('/enroll', (req, res) => {
  try {
    // Basic validation
    const { name, age, selectedBatch } = req.body;
    if (!name || !age || !selectedBatch) {
      return res.status(400).json({ error: 'Incomplete data provided.' });
    }

    // More specific age validation
    if (age < 18 || age > 65) {
      return res.status(400).json({ error: 'Invalid age. Must be between 18 and 65.' });
    }
    

    // Assuming storing data in-memory for simplicity
    const enrollmentDetails = {
      name,
      age,
      selectedBatch,
      enrollmentDate: new Date(),
    };

    // Store data in the in-memory database
    enrollmentData.push(enrollmentDetails);

    // Assuming CompletePayment function is called here (not implemented)
    const paymentResponse = CompletePayment(enrollmentDetails);

    // Return a success response to the frontend
    res.json({ message: 'Enrollment successful', data: enrollmentDetails, paymentResponse });
  } catch (error) {
    console.error('Error processing enrollment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Mock function for payment (not implemented)
function CompletePayment(enrollmentDetails) {
  // This is a mock function, and you would implement the actual payment logic here
  console.log(`Processing payment for ${enrollmentDetails.name}`);
  // Assume payment is successful for demonstration
  return { status: 'success', message: 'Payment successful' };
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
