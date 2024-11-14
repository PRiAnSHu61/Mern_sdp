import React from 'react';
import { Link } from 'react-router-dom';

function GetTrainer({ trainers, onDeleteTrainer }) {
  return (
    <div>
      <ul style={{ textAlign: 'justify' }}>
        {trainers.map((trainer) => (
          <li key={trainer._id}>
            <strong>Name:</strong> {trainer.trainer_name} <span></span>
            <strong>Location:</strong> {trainer.trainer_location} <span></span>
            <strong>Skills:</strong> {trainer.trainer_skills} <span></span>
            <strong>Phone:</strong> {trainer.trainer_phone} <span></span>
            <Link to={`/edit-trainer/${trainer._id}`}>
              <button id='edit'>Edit</button>
            </Link>
            <button id = 'delete' onClick={() => onDeleteTrainer(trainer._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetTrainer;
