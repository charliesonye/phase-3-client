
import TechnicianLink from './TechnicianLink'
import TechieForm from './TechieForm'

 function TechnicianList({techies, onAddTechie}) {

  
  const techiesList = techies.map(techie =>  <TechnicianLink techie={techie} key={techie.id} />)
   
  
  return (
    <div>
      <TechieForm onAddTechie={onAddTechie} />
      {techiesList}
    </div>
  )
}

export default TechnicianList