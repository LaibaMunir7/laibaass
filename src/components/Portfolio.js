import React from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="overlay"></div>
      <div className="portfolio-content">
        <h1>My Experience</h1>
        <p>
          I'm <strong>Laiba Munir</strong>, a passionate Front-End Developer currently in my 
          <strong> 5th semester</strong>. I love turning ideas into real, interactive websites.
        </p>

        <h2>Languages & Tools I Practice</h2>
        <ul>
          <li>HTML-- Building structure of web pages</li>
          <li>CSS-- Styling and responsive layouts</li>
          <li>JavaScript-- Making web pages interactive</li>
          <li>React JS-- Creating reusable UI components</li>
          <li>Git & GitHub-- Version control and collaboration</li>
          <li>C++-- OOP for efficient applications. </li>
          <li>DBMS-- Managing and organizing data using SQL databases.</li>
          <li>Python-- Simple scripting and problem-solving language.</li>
        </ul>

        <h2>My Projects</h2>
        <p>
          I’ve worked on mini web projects and React apps as part of my coursework and personal learning journey.
        </p>
      </div>
    </div>
  );
};