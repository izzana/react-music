import styles from './CardInformation.module.css'

const CardInformation = () => {
    return (
        <div className={styles.component_text}>
            <div>
                <h1>Order Summary</h1>
            </div>
            <div className={styles.text_info}>
                <p>You can now listen to millions of songs, auidobooks and podcasts
                    or any device anywhere you like!
                </p>
            </div>
        </div>
    )
}

export default CardInformation;