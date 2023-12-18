// AdmissionForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Basic validation
      if (formData.age < 18 || formData.age > 65) {
        alert('Invalid age. Must be between 18 and 65.');
        return;
      }

      // Call backend API to store data
      const response = await axios.post('http://localhost:3001/enroll', formData);

      // Assuming CompletePayment function is called here (not implemented)
      // CompletePayment(formData, response.data);

      alert('Enrollment successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Select Batch:
        <select name="selectedBatch" value={formData.selectedBatch} onChange={handleInputChange} required>
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
