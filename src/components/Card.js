import styles from './Card.module.css'
import Header from './Header';
import CardInformation from './CardInformation';
import CancelButton from './buttons/CancelButton'
import ComponentPlan from './ComponentPlan';
import PaymentButton from './buttons/PaymentButton';

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