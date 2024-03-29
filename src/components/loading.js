import styles from './loading.module.css'

import loading from './img/loading.svg'


const Loading = () => {
    return (
        <div className={styles.loader_container} >
            <img  className={styles.loader} src={loading} alt="loading" />
        </div>
    )
}


export default Loading