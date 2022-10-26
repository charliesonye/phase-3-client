import React, {useState} from 'react'


 function TechieForm({onAddTechie}) {
    const [techieForm, setTechieForm] = useState({
        name: '',
        title: '',
        experience: ''
    })
  

    function handleChange(e){
        setTechieForm({...techieForm,
        [e.target.name] :e.target.value
        })
    }
  
    function handleSubmit(e){
        e.preventDefault()

        const newTechie = {
            name: techieForm.name,
            title: techieForm.title,
            experience: techieForm.experience
        }

        fetch("http://localhost:9292/technicians",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTechie)
        })
        .then((res) => res.json())
        .then((data) => onAddTechie(data))

    }

    return (
    <div>
        <h4><u>New Technician</u></h4>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name="name" type="text" value={techieForm.name} onChange={handleChange}></input>
            <label>Title: </label>
            <input name="title" type="text" value={techieForm.title} onChange={handleChange}></input>
            <label>Experience: </label>
            <input name="experience" type="text" value={techieForm.experience} onChange={handleChange}></input>
            <input type="submit" />
        </form>
    </div>
  )
}

export default TechieForm
