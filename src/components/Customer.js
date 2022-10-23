import React from 'react'

 function Customer({customer}) {
  return (
    <div>
        <h2>Id:{customer.id} </h2><br />
        <h2>Item: {customer.item}</h2><br />
        <h2>Description: {customer.description}</h2><br />
        <h2>Item Received: {customer.item_received}</h2><br />
        <h2>Item Returned: {customer.item_returned}</h2><br />
        <h2>Technician Id/Name: {customer.technician_id}</h2><br />
        <hr/>
    </div>
  )
}

export default Customer