import React from 'react'

 function Customer({customer, params}) {
  debugger
  return (
    <div>
      <hr />
      <h2> Customer ID: {customer.id}</h2>
      <h2> Item: {customer.item}</h2>
      <h2> Service Status: {
              customer.item_returned > customer.item_received ?
              "Resolved" :
              "Pending"
              }
     </h2>
      <hr />
    </div>
  )
}

export default Customer