import React, {useState, useEffect} from 'react'

 function CustomerForm({techies}) {
    const [customerData, setCustomerData] = useState({
      name: "",
      item: "",
      item_received: "",
      item_returned: "",
      description: "",
      technician_id: ""
    })

    function handleChange(e) {
      setCustomerData({
        ...customerData,
        [e.target.name]: e.target.value
      })
      
    }
  return (
    <div>

        <h1><u>Customer Form:</u></h1>
        <form>
            <label > Name: </label>
            <input type='text' name='name' value={customerData.name} onChange={handleChange} /><br />
            <label > Item: </label>
            <input type='text' name='item' value={customerData.item} onChange={handleChange}/><br />
            <label > Item Received Date: </label>
            <input type='date' name='item_received' value={customerData.item_received} onChange={handleChange}  /><br />
            <label > Item Return Date: </label>
            <input type='date' name='item_returned' value={customerData.item_returned} onChange={handleChange} /><br />
            <label > Description: </label>
            <input type='text' name='description' value={customerData.description} onChange={handleChange} />
            
            <label >Technician Assigned:</label>
            <select name="technicians" >
                {techies.map(techie => (
                <option key={techie.id}  value={customerData.technician_id} onChange={handleChange}>{techie.name} </option>
                ))}
            </select>
            <input type='submit' />
        </form>
    </div>
  )
}

export default CustomerForm