import React from 'react';
import "./Services.css";
export const Services=()=>{
  return (
    <div className="services">
      <h2>My Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Web Design</h3>
          <p>Clean, modern, and mobile-friendly designs.</p>
        </div>
        <div className="card">
          <h3>React Development</h3>
          <p>Building fast, interactive user interfaces with React.</p>
        </div>
        <div className="card">
          <h3>UI/UX Improvements</h3>
          <p>Designing interfaces that are both aesthetic and easy to use.</p>
        </div>
      </div>
    </div>
  );
}

