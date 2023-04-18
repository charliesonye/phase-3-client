import React from 'react'
import Customer from './Customer'



function CustomerList({customers, searchText, setSearchText, lowerCaseSearchText}) {
  
//   const filteredData = data.filter((el) => {
//     //if no input the return the original
//     if (props.input === '') {
//         return el;
//     }
//     //return the item which contains the user input
//     else {
//         return el.text.toLowerCase().includes(props.input)
//     }
// })
  
//   const filteredCustomers = customers.filter((customer)=> {
//       if (searchText === '') {
//         return customer
//       } else if (customer.name.toLowerCase().includes(searchText.toLowerCase())){
//         return customer
//       }
// }) 

// **Add FilteredCustomers variable to customer list variable to complete search functionality

    const customersList = [...customers].reverse().map(customer =>(
        <Customer 
        key={customer.id} 
        customer={customer} 
        />
      ))

  return (
    <div> 
      <h3 style={{color: 'white'}}><u>Search for Customer File:</u></h3>
      <input 
        placeholder='Enter Customer Name'
        onChange={(e)=> setSearchText(e.target.value) }      
      />
     {customersList}
    </div>
  )
}


export default CustomerList











/*{<form>
        <h3>Filter:</h3>
        <select> 
          <option >Select Status</option>
          <option>{resolved}</option>
          <option>{pending}</option>

        </select>

        </form> }*/

 //  const [resolved, setResolved] = useState("Resolved")
  //  const [pending, setPending] = useState("Pending")

 // pending={pending}
        // resolved={resolved}