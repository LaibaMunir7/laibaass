import React from "react";
import "./Projects.css";
export const Projects=()=> {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive React-based personal portfolio to present my development skills and growth as a programmer.</p>
        </div>
        <div className="project-card">
          <h3>Shopping UI</h3>
          <p>Frontend for a product catalog and cart system.
            Helps user in shopping.</p>
        </div>
        <div className="project-card">
          <h3>Lost and Found System</h3>
          <p>A web-based platform that helps users report and recover loat items easily within their community.</p>
        </div>
      </div>
    </div>
  );
}
