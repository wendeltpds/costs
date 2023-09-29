import { useState , useEffect } from 'react'

import styles from './Message.module.css'


const Message = ({type , msg}) => {
    const [visible , setvisible] = useState(false);

    useEffect(() => {
        if(!msg){
            setvisible(false)
            return
        }

        setvisible(true)

        const timer = setTimeout(() => {
            setvisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <div>
            {visible && (
                <div  className={`${styles.message}  ${styles[type]} `} >{msg}</div>
            )
            }
        </div>
    )
}

export default Message