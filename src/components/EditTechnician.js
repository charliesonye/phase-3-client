import React, {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

 function EditTechnician({techie, onUpdateTechie}) {
    const [editedTechId, setEditedTechId] = useState(techie.title)
    const params = useParams()
    const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    fetch(`http://localhost:9292/technicians/${params.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({title: editedTechId})
    })
    .then(res => res.json())
    .then(data => {
      onUpdateTechie(data)
      navigate(`/technicians`)
    })
    
  }
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTechId}
            onChange={(e)=>setEditedTechId(e.target.value)}
          >
          </input>
          <input type="submit" />
        
        </form>
    </div>
  )
}

export default EditTechnician