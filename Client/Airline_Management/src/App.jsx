import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/Navbar';
import FlightList from './components/FlightList';
import AddFlight from './components/AddFlight';
import EditFlight from './components/EditFlight';
import Home from './components/Home';

function App() {
  const [flights, setFlights] = useState([]);

  const handleAddFlight = (newFlight) => {
    setFlights([...flights, { id: Date.now(), ...newFlight }]);
  };

  const handleEditFlight = (id, updatedFlight) => {
    // Update the flight in the list
    setFlights(flights.map((flight) => 
      flight.id === parseInt(id) ? { ...flight, ...updatedFlight } : flight
    ));
  };

  const handleDeleteFlight = (id) => {
    setFlights(flights.filter((flight) => flight.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/flights" 
          element={<FlightList flights={flights} onEdit={handleEditFlight} onDelete={handleDeleteFlight} />} 
        />
        <Route 
          path="/add-flight" 
          element={<AddFlight onAdd={handleAddFlight} />} 
        />
        <Route 
          path="/edit-flight/:id" 
          element={<EditFlight flights={flights} onEdit={handleEditFlight} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
