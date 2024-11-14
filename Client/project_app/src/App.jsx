import React, { useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './css/App.css'
import AddTrainer from './components/addTrainer'
import GetTrainer from './components/getTrainer'
import axios from 'axios'

function App() {
  const{trainers, setTrainers} = useState([]);

  //Fetch trainer data when the component mounts
  useEffect(() => {
    const fetchTrainers = async() => {
      try{
        const response = await axios.get('http://localhost:3000/api/trainer/');
        setTrainers(response.data);
      }
      catch(error){
        console.error('Error fetching trainers', error);
      }
    };
    fetchTrainers();
}, []);

const handleAddTrainer = (newTrainer) => {
  setTrainers([...trainers, newTrainer]);
};
}

//const handleUpdateTrainer = (updatedTrainer) => {
    // const updatedTrainers = trainers.map((trainer) => )
//}



export default App
