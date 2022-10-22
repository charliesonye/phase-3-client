
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/technicians' element={<TechnicianList />}  />
            <Route path='/technicians/:id' element={<Technician />} />
            <Route path='/customer_form' element={<CustomerForm />} />
            <Route path='/customer/:id' element={<Customer />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
