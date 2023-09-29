import { Link } from 'react-router-dom'


import styles from './projectcard.module.css'

import {BsPencil , BsFillTrashFill} from 'react-icons/bs'


const Projectcard = ({id , name , budget , category , handleremove}) => {

    const remove = (e) => {
        e.preventDefault()
        handleremove(id)
    }

    return (
        <div className={styles.lotus} >
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>
                <span>orçamento:</span> R${budget} 
            </p>

            <p className={styles.category_text} >
                <span className={`${styles[category]}`} ></span> {category}
            </p>

            <div className={styles.project_card_action} >
                <Link to={`/project/${id}`} >
                    <BsPencil /> editar
                </Link>

                <button onClick={remove} >
                    <BsFillTrashFill /> excluir
                </button>
            </div>
        </div>
        </div>
    )
}

export default Projectcard