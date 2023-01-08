import styles from './Card.module.css'
import topo from './illustration-hero.svg'

const Card = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.container}>
                <header className={styles.topo_image}>
                    <img src={topo} alt="" />
                </header>
                <div className=''>
                    <h1>Order Summary</h1>
                </div>
                <div className={styles.text_info}>
                    <p>You can now listen to millions of songs, auidobooks and podcasts
                        or any device anywhere you like!
                    </p>
                </div>
                <div >

                </div> 
            </div>
        </div>
        
    )
}

export default Card;