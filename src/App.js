
import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TechnicianList from './components/TechnicianList'
import Technician from './components/Technician'
import TechiesCustomer from './components/TechiesCustomer'
import NavBar from './components/NavBar';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList'

function App() {

  const [techies, setTechies] = useState([])

  useEffect(()=> {
    fetch('http://localhost:9292/technicians')
    .then(res => res.json())
    .then(data => setTechies(data))
  }, [])

  function handleAddCustomer(newCustomer){

  }
  
  return (
    <div className="App">
        <Router>
        <NavBar />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/technicians' element={<TechnicianList techies={techies} />}  />
            <Route path='/technicians/:id' element={<Technician />} />
            <Route path='/customer_form' element={<CustomerForm techies={techies} />} />
            <Route path='/customers/:id' element={<TechiesCustomer />} />
            <Route path='/customers' element={<CustomerList />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
