import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditFlight = ({ flights, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState({
    flight_id: '',
    flight_name: '',
    flight_source: '',
    flight_destination: '',
    flight_fare: '',
    flight_duration: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const flightToEdit = flights.find(flight => flight.flight_id === parseInt(id));
    if (flightToEdit) {
      setFlightData(flightToEdit);
    }
  }, [id, flights]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightData({ ...flightData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(''); // Reset error

    try {
      const response = await axios.put(`http://localhost:3000/api/flight/${id}`, flightData);

      if (response.status === 200) {
        onEdit(id, response.data); // Update local state with edited flight
        navigate('/flights'); // Navigate back to flights list
      }
    } catch (err) {
      setError('Error updating flight. Please try again.');
      console.error('Error updating flight:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Edit Flight</h1>
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="flight_id"
          value={flightData.flight_id}
          onChange={handleInputChange}
          placeholder="Flight ID"
          disabled // Flight ID should not be editable
        />
        <input
          type="text"
          name="flight_name"
          value={flightData.flight_name}
          onChange={handleInputChange}
          placeholder="Airline"
          required
        />
        <input
          type="text"
          name="flight_source"
          value={flightData.flight_source}
          onChange={handleInputChange}
          placeholder="Source"
          required
        />
        <input
          type="text"
          name="flight_destination"
          value={flightData.flight_destination}
          onChange={handleInputChange}
          placeholder="Destination"
          required
        />
        <input
          type="number"
          name="flight_fare"
          value={flightData.flight_fare}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="flight_duration"
          value={flightData.flight_duration}
          onChange={handleInputChange}
          placeholder="Duration (hrs)"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default EditFlight;
