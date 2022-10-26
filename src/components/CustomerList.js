// import React, {useState, useEffect} from 'react'
import Customer from './Customer'


function CustomerList({customers}) {
   


    const customersList = [...customers].reverse().map(customer =>(
        <Customer key={customer.id} customer={customer} />
      ))

  return (
    <div>
        <form>
        <h3>Filter:</h3>
        <select> 
          
          <option>Resolved</option>
          <option>Unresolved</option>

        </select>

        </form>
        {customersList}
      
    </div>
  )
}


export default CustomerList