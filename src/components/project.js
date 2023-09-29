import styles from './project.module.css'

import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

import Loading from './loading'
import Container from './Container'


function Project() {
    const{id} = useParams()
    
    const [project , setproject] = useState([])
    const [ShowProjectForm , setShowProjectForm] = useState(false)



    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}` , {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
    
            }).then((resp) => resp.json())
            .then((data) => {
                setproject(data)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [id])

    const toggleProjectForm = () => {
        setShowProjectForm(!ShowProjectForm)
    }


    return (
        <>
            {project.name ? (
                <div className={styles.project_details} >
                    <Container customClass='column' >
                        <div className={styles.details_container} >
                            <h1>projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm} >
                            {!ShowProjectForm ? 'Editar projeto' : 'fechar'}
                            </button>
                            {!ShowProjectForm ? (
                                <div className={styles.project_info} >
                                    <p>project form</p>
                                </div>
                            ) : (
                                <div className={styles.project_info}  >
                                    <p>
                                        <span>categories</span> {project.category.name}
                                    </p>

                                    <p>
                                        <span>total do orçamento</span> {project.budget}
                                    </p>

                                    <p>
                                        <span>total utilizado</span> {project.cost}
                                    </p>

                                </div>
                            )}
                        </div>
                    </Container>
                </div>

            ): (
                <Loading/>
            )}
        </>
    )
}

export default Project