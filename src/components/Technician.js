import React, {useState,useEffect} from 'react'
import CustomerList from './Customer'
import {useParams} from 'react-router-dom'

 function Technician() {
  const [techies, setTechies]= useState({
    customers:[]
  })

  const params = useParams()

  useEffect(()=>{
    fetch(`http://localhost:9292/technicians/${params.id}`)
    .then(res => res.json())
    .then(data => setTechies(data))
  }, [params.id] )
  const customersList = techies.customers.map((customer)=> <CustomerList key={customer.id} customer={customer} params={params}/>)
  return (
   
    <div>
      <h1>Technician Profile</h1>
      <h2>Name: {techies.name}</h2>
      <h3>Title: {techies.title}</h3>
      <h3>Experience: {techies.company_experience}</h3><br/>

      <h1>List Of Customers</h1>
      {customersList}

    </div>
  )
}

export default Technician