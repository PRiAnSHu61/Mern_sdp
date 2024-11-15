import React, { useState } from 'react';

function AddFlight({ onAdd }) {
  const [flightID, setFlightID] = useState('');
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!flightID || !name || !source || !destination || !price || !duration) {
      alert('All fields are required.');
      return;
    }
    onAdd({ flightID, name, source, destination, price, duration });
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
        type="text"
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
