import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from './project/ProjectForm'


const NewProject = () => {

    const history = useNavigate()

    function createpost(project) {
        project.cost = 0
        project.services = []

        fetch("https://jsonserver-pi.vercel.app/projects", {
            method: 'POST' ,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()) 
        .then((data) => {
            console.log(data)
        })
        .catch(err  => console.log(err))
        history('/project' ,{ state: {message:'projeto criado com sucesso'}})
    }

    return (
        <div className= {styles.newproject_container} >
            <h1>criar projeto</h1>
            <p>crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm  handlesubmit={createpost} btntext = "criar projeto" />
        </div>
    )
}

export default NewProject