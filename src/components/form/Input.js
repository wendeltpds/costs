import styles from './Input.module.css'

const Input = ({type , text , name , placeholder , handleonchange , value}) => {
    return (
        <div className={styles.form_control} >
            <label htmlFor={name} >{text}:</label>
            <input
            
             type={type}
             name={name}
             id={name}
             placeholder={placeholder}
             onChange={handleonchange} 
             value={value}
             required
             />
        </div>
    )
}

export default Input