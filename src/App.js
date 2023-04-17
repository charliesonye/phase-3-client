
import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TechnicianList from './components/TechnicianList'
import Technician from './components/Technician'
import TechiesCustomer from './components/TechiesCustomer'
import NavBar from './components/NavBar';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';


function App() {

  const [techies, setTechies] = useState([])
  const [customers, setCustomers] = useState([])
  const [searchText, setSearchText] = useState([])

  
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

  const SearchInput = (e)=> {

    let lowerCaseInput = e.target.value.toLowerCase()
    setSearchText(lowerCaseInput)
  }
  
  function handleUpdateTechie(updatedObj){
    const updatedTechies = techies.map((techie) =>{
      if(techie.id === updatedObj.id){
        return updatedObj
      }else {
        return techie
      }
    })
    setTechies(updatedTechies)
  }
 
  function handleDeleteTechie(id){
    const newListOfTechies = techies.filter(techie => techie.id === id)
    setTechies(newListOfTechies)
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
              lowerCaseSearchText={SearchInput}
              searchText={searchText}
              />} 
            />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;





// import React from 'react'
// const [searchCustomers, setSearchCustomers] = useState("")
  

// Props for CustomerList to pass down:
// search={searchCustomers}
// setSearch={setSearchCustomers}

//  function Search({search, setSearch}) {
//   return (
//   <nav>

//         <input
//             name="customer-search"
//             type="text"
//             value={search}
//             onChange={e => setSearch(e.target.value)}

//         >
        
//         </input>
//   </nav>
    
//   )
// }

// export default Search

// const customerDisplay = customers.filter((customer)=> {
//   customer?.item?.toLowerCase().includes(searchCustomers?.toLowerCase())
// }) 