import React from 'react'
import Customer from './Customer'



function CustomerList({customers}) {
  
 
    const customersList = [...customers].reverse().map(customer =>(
        <Customer 
        key={customer.id} 
        customer={customer} 
        />
      ))

  return (
    <div> 
     {customersList}
    </div>
  )
}


export default CustomerList











{/* <form>
        <h3>Filter:</h3>
        <select> 
          <option >Select Status</option>
          <option>{resolved}</option>
          <option>{pending}</option>

        </select>

        </form> */}

 //  const [resolved, setResolved] = useState("Resolved")
  //  const [pending, setPending] = useState("Pending")

 // pending={pending}
        // resolved={resolved}