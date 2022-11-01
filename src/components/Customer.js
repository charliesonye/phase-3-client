import React, {useState} from 'react'


 function Customer({customer}) {
  const [isFullProfile, setIsFullProfile] = useState(false)

  const serviceStatus =  customer.item_received < customer.item_returned ? "Resolved" : "Pending"
  
  function viewMore(){
    setIsFullProfile(!isFullProfile)
  }
  
  return (
    <div className='customer-card'>
              <h2><u>Id: {customer.id}</u></h2>
              <h2>Service Status: {serviceStatus}
              </h2>
              <h2>Customer Name: {customer.name}</h2>
              <h2>Item: {customer.item}</h2>
              <button onClick={viewMore}>Change View</button>
              {isFullProfile ? (<>
                <h2>Description: {customer.description}</h2>
                <h2>Item Received: {customer.item_received}</h2>
                <h2>Item Returned: {customer.item_returned}</h2>
                <h2>Technician Id: {customer.technician_id}</h2>

                </>) : (null)
                }
        <hr/>
        
    </div>
  )
}

export default Customer












