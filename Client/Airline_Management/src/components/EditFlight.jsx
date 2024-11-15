import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditFlight = ({ flights, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState({
    name: '',
    source: '',
    destination: '',
    price: '',
    duration: ''
  });

  useEffect(() => {
    const flightToEdit = flights.find(flight => flight.id === parseInt(id));
    if (flightToEdit) {
      setFlightData(flightToEdit);
    }
  }, [id, flights]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightData({ ...flightData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(id, flightData); // Passing updated data to parent
    navigate('/flights'); // Navigate back to flights list
  };

  return (
    <div className="container">
      <h1>Edit Flight</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={flightData.name}
          onChange={handleInputChange}
          placeholder="Airline"
          required
        />
        <input
          type="text"
          name="source"
          value={flightData.source}
          onChange={handleInputChange}
          placeholder="Source"
          required
        />
        <input
          type="text"
          name="destination"
          value={flightData.destination}
          onChange={handleInputChange}
          placeholder="Destination"
          required
        />
        <input
          type="number"
          name="price"
          value={flightData.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="duration"
          value={flightData.duration}
          onChange={handleInputChange}
          placeholder="Duration (hrs)"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditFlight;
