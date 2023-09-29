import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from './img/costs_logo.png'
import Container from "./Container"


function Navbar(){
    return (
      <nav className= {styles.navbar} >
        <Container>
          <div className= {styles.tudo} >
            <div>
              <Link to= "/home" > 
                <img src= {logo} alt="costs" />
              </Link>
            </div>
            <ul className={styles.list} >
              <li className={styles.item} >
                <Link className={styles.route_company} to="/home">Home</Link>
              </li>
              <li className={styles.item} >
                <Link className={styles.route_company} to="/company">company</Link>
              </li>
              <li className={styles.item} >
                <Link className={styles.route_company} to="/contact">Contato</Link>
              </li>
              <li className={styles.item} >
                <Link className={styles.route_company} to="/newproject">novoprojeto</Link>
              </li>
              <li className={styles.item} >
                <Link className={styles.route_company} to="/project">projetos</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    )
};

export default Navbar