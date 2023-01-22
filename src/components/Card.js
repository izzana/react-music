import CardInformation from './cardInformation/CardInformation';
import CancelButton from './buttons/CancelButton'
import ComponentPlan from './componentPlan/ComponentPlan';
import Header from './header/Header';
import PaymentButton from './buttons/PaymentButton';
import styles from './Card.module.css'

const Card = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.container}>
                <Header />
                <div className={styles.container_interno}>
                <CardInformation />
                <ComponentPlan />
                <div className={styles.buttons}>
                    <PaymentButton />
                    <CancelButton />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;