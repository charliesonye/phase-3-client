import React, {useState, useEffect} from 'react';
import TechnicianLink from './TechnicianLink'

 function TechnicianList() {
  const [techies, setTechies] = useState([])

  useEffect(()=> {
    fetch('http://localhost:9292/technicians')
    .then(res => res.json())
    .then(data => setTechies(data))
  }, [])

  
  const techiesList = techies.map(techie =>  <TechnicianLink techie={techie} key={techie.id} />)
   
      // <div className='Techie-card' >
     
        {/* <ul>

          <li><h3>Title: {techie.title}</h3></li>
          <li><h3>Company Experience: {techie.company_experience} year(s)</h3></li>

        </ul> */}
    // </div>
   
  
  return (
    <div>
      {techiesList}
    </div>
  )
}

export default TechnicianList