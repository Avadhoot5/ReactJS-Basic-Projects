import styles from './Navigation.module.css';

function Navigation() {

  return (
    <>
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="../images/logo.png" alt="logo" />
        </div>
        <ul className="section">
            <li href="#">HOME</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
        </ul>
    </nav>
    </>
  )
}



export default Navigation;