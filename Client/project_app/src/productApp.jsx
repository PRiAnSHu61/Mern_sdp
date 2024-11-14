import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import AddTrainer from './components/addTrainer';
import GetTrainer from './components/getTrainer';
import EditTrainer from './components/editTrainer';
import axios from 'axios';

function App() {
  const [trainers, setTrainers] = useState([]);

  // Fetch trainers data when the component mounts
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/trainers/');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);

  const handleAddTrainer = (newTrainer) => {
    setTrainers([...trainers, newTrainer]);
  };

  const handleUpdateTrainer = (updatedTrainer) => {
    const updatedTrainers = trainers.map((trainer) =>
      trainer._id === updatedTrainer._id ? updatedTrainer : trainer
    );
    setTrainers(updatedTrainers);
  };

  const handleDeleteTrainer = async (trainerId) => {
    try {
      // Call your backend API to delete the trainer (if you have a backend)
      await axios.delete(`http://localhost:3000/api/trainer/${trainerId}`);

      // If successful, remove the trainer from the state
      setTrainers(trainers.filter((trainer) => trainer._id !== trainerId));
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Trainer Management</h1>
        <nav>
          <Link to="/">Trainer List</Link> | <Link to="/add-trainer">Add Trainer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetTrainer trainers={trainers} onDeleteTrainer={handleDeleteTrainer} />} />
          <Route path="/add-trainer" element={<AddTrainer onAddTrainer={handleAddTrainer} />} />
          <Route path="/edit-trainer/:id" element={<EditTrainer trainers={trainers} onUpdateTrainer={handleUpdateTrainer} />} />
          <Route path="/delete-trainer/:id" element={<EditTrainer trainers={trainers} onUpdateTrainer={handleUpdateTrainer} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;