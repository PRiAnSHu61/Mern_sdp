import React, { useState } from 'react';
import axios from 'axios';

function AddFlight({ onAdd }) {
  const [flightID, setFlightID] = useState('');
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!flightID || !name || !source || !destination || !price || !duration) {
      alert('All fields are required.');
      return;
    }

    const newFlight = { flight_id: flightID, flight_name: name, flight_source: source, flight_destination: destination, flight_fare: price, flight_duration: duration };

    try {
      // Make a POST request to the backend to add the flight
      const response = await axios.post('http://localhost:3000/api/flight', newFlight);

      if (response.status === 201) {
        // Call the parent function to add the flight to the list
        onAdd(response.data);
        alert('Flight added successfully!');
      }
    } catch (error) {
      console.error('Error adding flight:', error);
      alert('Error adding flight. Please try again.');
    }

    // Clear form fields
    setFlightID('');
    setName('');
    setSource('');
    setDestination('');
    setPrice('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Flight</h2>
      <input
        type="number"
        placeholder="Flight ID"
        value={flightID}
        onChange={(e) => setFlightID(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (hrs)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit">Add Flight</button>
    </form>
  );
}

export default AddFlight;
