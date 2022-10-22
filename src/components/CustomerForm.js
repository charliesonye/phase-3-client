import React, {useState, useEffect} from 'react'

 function CustomerForm() {
    const [customerData, setCustomerData] = useState({
      name: "",
      item: "",
      item_received: "",
      item_returned: "",
      description: "",
      
    })
  return (
    <div>
        <form>
            <label for='name'> Name: </label>
            <input type='text' name='name' /><br />
            <label for='item'> Item: </label>
            <input type='text' name='item' /><br />
            <label for='item received'> Item Received Date: </label>
            <input type='date' name='item received' /><br />
            <label for='item returned'> Item Return Date: </label>
            <input type='date' name='item returned' /><br />
            <label for='description'> Description: </label>
            <input type='text' name='description' />
            
            <label for='technicians'>Technician Assigned:</label>
            <select name="technicians" >
                {}
            </select>
        </form>
    </div>
  )
}

export default CustomerForm