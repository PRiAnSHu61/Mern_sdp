import React from 'react';
import '../css/Home.css';
import airlineImage from '../assets/airline.jpg'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Airline Management System</h1>
      <p>
        Manage flights with ease using our platform. Add, view, and manage flight details for a streamlined travel experience.
      </p>
      <div className="features">
        <div className="feature-card">
          <h3>Manage Flights</h3>
          <p>Efficiently add and organize flight information including routes, duration, and more.</p>
        </div>
        <div className="feature-card">
          <h3>Quick Access</h3>
          <p>Easily view and edit flight schedules, ensuring your database is always up-to-date.</p>
        </div>
        <div className="feature-card">
          <h3>User-Friendly</h3>
          <p>Our system is designed with simplicity in mind for both operators and travelers.</p>
        </div>
      </div>
      <img src={airlineImage} alt="Airline Management" className="home-image" />
    </div>
  );
}

export default Home;
