import styles from './SubmitButton.module.css'

const SubmitButoon = ({text }) => {
    return (
        <div>
            <button className={styles.btn} >{text}</button>
        </div>
    )
}

export default SubmitButoon