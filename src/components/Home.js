import styles from './Home.module.css'
import savings from './img/savings.svg'
import LinkButton from './LinkButton'



const Home = () => {
    return (
        <section className= {styles.home_container} >
            <h1>bem-vindo ao <span>costs</span></h1>
            <p>comece a gerenciar seu projetos</p>
            <LinkButton  text= "criar projetos" to= "/newproject"  />
            <img src= {savings} alt="savings imagem" />
        </section>
    )
}

export default Home