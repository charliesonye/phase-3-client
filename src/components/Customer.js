import React from 'react'

 function Customer({customer}) {
  return (
    <div>
        <h2>Id:{customer.id} </h2>
        <h2>Customer Name: {customer.name}</h2>
        <h2>Item: {customer.item}</h2>
        <h2>Description: {customer.description}</h2>
        <h2>Item Received: {customer.item_received}</h2>
        <h2>Item Returned: {customer.item_returned}</h2>
        <h2>Technician Id: {customer.technician_id}</h2>
        
        <hr/>
    </div>
  )
}

export default Customer