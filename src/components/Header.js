import topo from './illustration-hero.svg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.topo_image}>
            <img src={topo} alt="" />
        </header>
    )
}

export default Header;