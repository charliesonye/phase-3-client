
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
  const [searchText, setSearchText] = useState("")
  const [customerfilter, setCustomerFilter] = useState()

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

  function handleAddTechie(newTechie){
    setTechies([...techies, newTechie])
  }
  
  function handleUpdateTechie(updatedObj){
    const updatedTechies = techies.map((techie) =>{
      if(techie.id === updatedObj.id){
        return updatedObj
      }else {
        return techie
      }
    })
    setCustomers(updatedTechies)
  }
 
  function handleDeleteTechie(id){
    const newListOfTechies = techies.filter(techie => techie.id === id)
    setTechies(newListOfTechies)
  }

  // const displayedCustomers = customers.filter((customer)=> {

  // }) 
  // This variable will be used for a search bar/filtering ability
  // Refer to Chatterbox lab for template and use nullish coalescing or logical and operator(??, &&)
  
  return (
    <div className="App">
        <Router>
        <NavBar />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/technicians' element={<TechnicianList 
              techies={techies} 
              onAddTechie={handleAddTechie}
              />}  
            />
            <Route path='/technicians/:id' element={<Technician
              onUpdateTechie={handleUpdateTechie}
              onDeleteTechie={handleDeleteTechie}
              />} />
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
