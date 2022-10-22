
import TechnicianLink from './TechnicianLink'

 function TechnicianList({techies}) {

  
  const techiesList = techies.map(techie =>  <TechnicianLink techie={techie} key={techie.id} />)
   
  
  return (
    <div>
      {techiesList}
    </div>
  )
}

export default TechnicianList