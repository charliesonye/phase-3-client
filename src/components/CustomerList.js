// import React, {useState, useEffect} from 'react'
import Customer from './Customer'
// import CustomerForm from './CustomerForm'

function CustomerList({customers}) {
    // const [customers, setCustomers] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:9292/customers')
    //     .then(res => res.json())
    //     .then(data => setCustomers(data))
    // }, [])

   

    const customersList = [...customers].reverse().map(customer =>(
        <Customer key={customer.id} customer={customer} />
      ))

  return (
    <div>
        
        {customersList}
      
    </div>
  )
}


export default CustomerList