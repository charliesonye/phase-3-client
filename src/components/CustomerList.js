import React, {useState, useEffect} from 'react'

function CustomerList() {
    const [customers, setCustomers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9292/customers')
        .then(res => res.json())
        .then(data => setCustomers(data))
    }, [])

    
  return (
    <div>CustomerList</div>
  )
}


export default CustomerList