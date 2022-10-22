import React from 'react'
import {Link} from 'react-router-dom'

 function TechnicianLink({techie}) {
  return (
    <div>
        <Link to={`/technicians/${techie.id}`} >
        <h2>Name: {techie.name}</h2>
        </ Link >
        <h3>Title: {techie.title}</h3>
        <h3>Company Experience: {techie.company_experience} year(s)</h3>
    </div>
  )
}

export default TechnicianLink