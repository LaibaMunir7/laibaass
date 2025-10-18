import React from "react";
import "./Contact.css";

export const Contact=()=> {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <img
        src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
        alt="Contact"
        className="contact-img"
      />
      <p>Feel free to get in touch for any collaboration or project discussion.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}