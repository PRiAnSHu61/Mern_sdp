import React from 'react';

function FlightList({ flights, onEdit, onDelete }) {
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
            <tr key={flight.flightID}>
              <td>{flight.flightID}</td>
              <td>{flight.name}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>${flight.price}</td>
              <td>{flight.duration} hrs</td>
              <td>
                <button onClick={() => onEdit(flight)}>Edit</button>
                <button onClick={() => onDelete(flight.flightID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
