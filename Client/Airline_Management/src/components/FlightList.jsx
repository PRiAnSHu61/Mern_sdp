import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/flight');
        setFlights(response.data); // Set flights data in state
      } catch (error) {
        console.error('Error fetching flights:', error);
        alert('Error fetching flights. Please try again.');
      }
    };

    fetchFlights();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Make an API call to delete the flight
      const response = await axios.delete(`http://localhost:3000/api/flight/${id}`);
      console.log(response.data); // Log response to check if deletion was successful
  
      // Remove the deleted flight from the local state
      setFlights(flights.filter(flight => flight.flight_id !== id));
      alert('Flight deleted successfully');
    } catch (err) {
      console.error('Error deleting flight:', err);
      alert('Error deleting flight. Please try again.');
    }
  };
  

  return (
    <div>
      <h2>Flight List</h2>
      <table>
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flight_id}>
              <td>{flight.flight_id}</td>
              <td>{flight.flight_name}</td>
              <td>{flight.flight_source}</td>
              <td>{flight.flight_destination}</td>
              <td>${flight.flight_fare}</td>
              <td>{flight.flight_duration} hrs</td>
              <td>
                <Link to={`/edit-flight/${flight.flight_id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(flight.flight_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
