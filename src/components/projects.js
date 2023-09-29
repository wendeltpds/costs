import { useLocation } from "react-router-dom"
import { useState , useEffect } from "react"

import Message from "./message"
import  Container from "./Container"
import  Loading  from "./loading"
import LinkButton from "./LinkButton"
import Projectcard from "./project/projectcard"

import styles from './projects.module.css'


const Projects = () => {

    const [projects , setprojects] = useState([])
    const [removeloading , setremoveloading] = useState(false)

    const location = useLocation()
    let message = ""
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout (() => { 
       fetch('http://localhost:5000/projects' , {
        method: 'GET' ,
        headers: {
            'content-type': 'application/json'
        },
        }).then(resp => resp.json())   
        .then((data) => {
            setprojects(data)
            setremoveloading(true)
        })
        .catch((err) => console.log(err))
    }, 300)
    }, [])

    function removeproject(id) {
        fetch(`http://localhost:5000/projects/${id}` , {
            method: 'DELETE' ,
            headers: {
                'Contet-Type': 'application/json'
            },
        }).then (data => {
            setprojects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err))
    }


    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>meus projetos</h1>
                <LinkButton  text= "criar projetos" to= "/newproject"  />
            </div>
           { message &&  <Message type= "sucess" msg={message} />}
           <Container customClas="start" >
               <div className={styles.flex} >
                {projects.length > 0 && 
                    projects.map((project) => (
                        <div className={styles.div} >
                            <Projectcard 
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category?.name}
                            key={project.id}
                            handleremove={removeproject}
                             />
                        </div>
                             ))}
                </div>
                {!removeloading && <Loading />}
                {removeloading && projects.length === 0 && (
                    <p>nao a projetos cadastrados</p>
                )}
           </Container>
        </div>
    )
}

export default Projects