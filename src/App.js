import logo from './logo.svg';
import './App.css';

// App.js

import React, { useState } from 'react';
import AdmissionForm from './AdmissionForm';

function App() {
  return (
    <div className="app-container">
    <div className="app-header">
      <h1>Yoga Class Admission</h1>
    </div>
    <div className="app-content">
      <AdmissionForm />
    </div>
  </div>
);
}

export default App;

