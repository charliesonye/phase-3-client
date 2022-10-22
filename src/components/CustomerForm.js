import React, {useState, useEffect} from 'react'

 function CustomerForm({techies}) {
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
            <label > Name: </label>
            <input type='text' name='name'  /><br />
            <label > Item: </label>
            <input type='text' name='item'  /><br />
            <label > Item Received Date: </label>
            <input type='date' name='item received'  /><br />
            <label > Item Return Date: </label>
            <input type='date' name='item returned'  /><br />
            <label > Description: </label>
            <input type='text' name='description'  />
            
            <label >Technician Assigned:</label>
            <select name="technicians" >
                {techies.map(techie => (
                <option key={techie.id} value={techie.id}>{techie.name} </option>
                ))}
            </select>
            <input type='submit' />
        </form>
    </div>
  )
}

export default CustomerForm