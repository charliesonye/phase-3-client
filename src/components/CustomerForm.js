import React, {useState} from 'react'

 function CustomerForm({techies, onAddCustomer}) {
    const [customerData, setCustomerData] = useState({
      name: "",
      item: "",
      item_received: "",
      item_returned: "",
      description: "",
    })
  
 
    const [techIds, setTechIds] = useState("")
    
    function handleSubmitCustomer(e){
      e.preventDefault()

      const newCustomer = {
        name: customerData.name,
        item: customerData.item,
        item_received: customerData.item_received,
        item_returned: customerData.item_returned,
        description: customerData.description,
        technician_id: techIds
      }

      fetch("http://localhost:9292/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCustomer)
      })
      .then((res) => res.json())
      .then((data) => {
        onAddCustomer(data)
        setCustomerData({
          name: "",
          item: "",
          item_received: "",
          item_returned: "",
          description: ""
        })
      })

      }

    

    function handleChange(e) {
      setCustomerData({
        ...customerData,
        [e.target.name]: e.target.value
      })
    }
    function selectChange(e){
      setTechIds(e.target.value)
    }
  return (
    <div>

        <h1><u>Customer Form:</u></h1>
        <form onSubmit= {handleSubmitCustomer}>
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
            <select name="technicians" onChange={selectChange} >
                <option value="prompt"  > Select Technician</option>
                {techies.map(techie => (
                <option key={techie.id}  value={techie.id} >{techie.name} </option>
                ))}
            </select>
            <input type='submit' />
        </form>
    </div>
  )
}

export default CustomerForm