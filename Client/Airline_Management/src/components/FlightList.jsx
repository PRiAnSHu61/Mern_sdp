import React from 'react';
import { Link } from 'react-router-dom';

function FlightList({ flights, onEdit, onDelete }) {
  return (
    <div>
      <h2 id='flightList'>Flight List</h2>
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
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.name}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>${flight.price}</td>
              <td>{flight.duration} hrs</td>
              <td>
                <Link to={`/edit-flight/${flight.id}`}>
                  <button id='editBtn'>Edit</button>
                </Link>
                
                <button 
                  id='deleteBtn' 
                  onClick={() => onDelete(flight.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
