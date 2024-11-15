import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Navbar from './components/Navbar';
import FlightList from './components/FlightList';
import AddFlight from './components/AddFlight';

function App() {
  const [flights, setFlights] = useState([]);

  const handleAddFlight = (newFlight) => {
    setFlights([...flights, { ...newFlight }]);
  };

  const handleDeleteFlight = (id) => {
    setFlights(flights.filter((flight) => flight.flightID !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route
          path="/flights"
          element={<FlightList flights={flights} onDelete={handleDeleteFlight} />}
        />
        <Route path="/add-flight" element={<AddFlight onAdd={handleAddFlight} />} />
      </Routes>
    </Router>
  );
}

export default App;
