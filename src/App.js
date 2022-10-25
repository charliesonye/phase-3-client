
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
  const [customers, setCustomers] = useState([])

  useEffect(()=> {
    fetch('http://localhost:9292/technicians')
    .then(res => res.json())
    .then(data => setTechies(data))
  }, [])

  useEffect(()=>{
    fetch('http://localhost:9292/customers')
    .then(res => res.json())
    .then(data => setCustomers(data))
}, [])
  
  function handleAddCustomer(newCustomer){
    setCustomers([...customers, newCustomer])
  }
  
 
  
  return (
    <div className="App">
        <Router>
        <NavBar />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/technicians' element={<TechnicianList 
              techies={techies} 
              />}  
            />
            <Route path='/technicians/:id' element={<Technician />} />
            <Route path='/customer_form' element={<CustomerForm 
              techies={techies} 
              customers={customers}  
              onAddCustomer={handleAddCustomer}
              />} 
            />
            <Route path='/customers/:id' element={<TechiesCustomer />} />
            <Route path='/customers' element={<CustomerList 
              customers={customers} 
              />} 
            />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
