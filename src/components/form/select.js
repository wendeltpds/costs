import { useEffect } from 'react'
import styles from './select.module.css'
import { json } from 'react-router-dom'

const Select = ({text , name , options , handleonchange , value}) => {
    return (
        <div className={styles.form_control} >
            <label htmlFor={name} >{text}:</label>
            <select
             name={name} 
            id={name}
             onChange={handleonchange} 
            value={value || ''} >
                <option>selecione uma opçao</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select


