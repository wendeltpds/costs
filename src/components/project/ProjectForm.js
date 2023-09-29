import { useEffect, useState } from 'react'

import styles from './Projectform.module.css'
import Input from '../form/Input'
import Select from '../form/select'
import SubmitButoon from '../form/SubmitButton'




const ProjectForm = ({ handlesubmit , btntext , projectdata}) => {
    const [categories , setcategories] = useState([])
    const [project , setproject] = useState(projectdata || {} )

    useEffect(() => {
        fetch("https://jsonserver-pi.vercel.app/categories" , {
            method: "GET",
            headers: {
                'content-type': 'aplication/json'
            }
        }).then((resp) => resp.json())
        .then((data) => setcategories(data))
        .catch((err) => console.log(err) )
    }, [] )

    const submit = (e) => {
        e.preventDefault()
        handlesubmit(project)
    }

    function handleChange(e) {
        setproject ({...project , [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e) {
        setproject ({...project , category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }
        })
    }

    return (
        
        <form  onSubmit={submit} className= {styles.form}>
            <Input 
                type="text"
                text="nome do projeto"
                name="name"
                placeholder="insira o nome do projeto" 
                handleonchange={handleChange}
                value={project.name ? project.name : ''}
                /> 
            <Input 
                type="number"
                text="orçamento do projeto"
                name="budget"
                placeholder="insira o orçamento total" 
                handleonchange={handleChange}
                value={project.budget ? project.budget : ''}
                /> 
            <Select  name="category_id" 
            text="selecione a categoria"
             options={categories}
             handleonchange={handleCategory}
             value={project.category ? project.category.id: ''}
              />
            <SubmitButoon  text={btntext}/>
        </form>
    )
}



export default ProjectForm
