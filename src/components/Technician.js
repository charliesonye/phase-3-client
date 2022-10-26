import React, {useState,useEffect} from 'react'
import TechiesCustomer from './TechiesCustomer'
import EditTechnician from './EditTechnician'

import {useParams} from 'react-router-dom'

 function Technician({onUpdateTechie, onDeleteTechie}) {
  const [techie, setTechie]= useState({
    customers:[]
  })
  const [isEditing, setIsEditing] = useState(false)

  const params = useParams()

  useEffect(()=>{
    fetch(`http://localhost:9292/technicians/${params.id}`)
    .then(res => res.json())
    .then(data => setTechie(data))
  }, [params.id] )

  function handleDelete(){
    fetch(`http://localhost:9292/technicians/${params.id}`,{
      method: 'DELETE',
    })
    onDeleteTechie(params.id)
  }

  function toggleEditScreen(){
    setIsEditing(!isEditing)
  }
  const customersList = techie.customers.map((customer)=> <TechiesCustomer key={customer.id} customer={customer} params={params}/>)
  return (

    
    <div>
      
     
      {isEditing ? (
          <EditTechnician
            techie={techie}
            onUpdateTechie={onUpdateTechie}
          />
      ) : (
        <>
         <h1>Technician Profile</h1>
         <h2>Name: {techie.name}</h2>
         <h3>Title: {techie.title}</h3>
         <h3>Experience: {techie.company_experience}</h3><br/>
        </>
        )}
      <button onClick={toggleEditScreen}> ✏️</button>
      <button onClick={handleDelete} > 🗑️</button>

      <h1>List Of Customers</h1>
      {customersList}
      
    </div>
  )
}

export default Technician