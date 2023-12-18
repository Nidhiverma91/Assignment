# Yoga Class Admission Form

This project implements a simple Yoga Class Admission Form with a React frontend and a Node.js/Express backend. The form allows users to enroll in yoga classes, choose a batch, and submit their details for admission.

## Approach

### Frontend (React)

The frontend is built using React, and it includes a basic form component (`AdmissionForm.js`) that collects user details such as name, age, and preferred batch. The form includes basic validation, and upon submission, it makes a POST request to the backend API for enrollment.

The styling has been enhanced using a basic CSS file (`App.css`) to make the application visually appealing.

### Backend (Node.js with Express)

The backend is implemented using Node.js and Express. The server (`server.js`) handles the POST request from the frontend, validates the incoming data, stores it in an in-memory database, and returns a response with a simulated payment process (mocked by `CompletePayment` function).

### Database

For simplicity, an in-memory array (`enrollmentData`) is used to store enrollment details. In a real-world scenario, you would use a database like MongoDB or MySQL.

## Assumptions

1. **In-memory Database:** Due to the simplicity of the example, an in-memory array is used to store enrollment data. In a production environment, a proper database solution should be implemented.

2. **Payment Processing:** The payment processing is simulated using a mock function (`CompletePayment`). In reality, this function would connect to a payment gateway for actual payment processing.

3. **Styling:** Basic styling has been applied to make the form visually appealing. In a production environment, a more sophisticated styling approach or a CSS framework may be used.

## How to Run

1. **Install Dependencies:**
   - Frontend: Navigate to the `frontend` directory and run `npm install`.
   - Backend: Navigate to the `backend` directory and run `npm install`.

2. **Run the Applications:**
   - Frontend: In the `frontend` directory, run `npm start`.
   - Backend: In the `backend` directory, run `npm start`.

3. **Access the Application:**
   - Open your browser and go to `http://localhost:3000` to access the Yoga Class Admission Form.

## Notes

- This is a basic example for educational purposes. In a real-world scenario, additional features, security measures, and error handling would be implemented.

- The payment processing logic is mocked, and actual integration with a payment gateway would be necessary for real payments.

## DATABASE STRUCTURE
Enrollment Table
+------------------+-------------+------+-----+-------------------+----------------+
| Field            | Type        | Null | Key | Default           | Extra          |
+------------------+-------------+------+-----+-------------------+----------------+
| id               | INT         | NO   | PK  | AUTO_INCREMENT    |                |
| name             | VARCHAR(50) | NO   |     |                   |                |
| age              | INT         | NO   |     |                   |                |
| selectedBatch    | VARCHAR(10) | NO   |     |                   |                |
| enrollmentDate   | DATETIME    | NO   |     | CURRENT_TIMESTAMP |                |
+------------------+-------------+------+-----+-------------------+----------------+
