import icon from './icon-music.svg';
import styles from './ComponentPlan.module.css'

const ComponentPlan = (params) => {
    return(
        <div className={styles.component_plan}>
            <span><img src={icon} alt="" /></span>
            <div className={styles.price}>
                <p>Annual Plan</p>
                <p style={{marginTop: '5px',}}>$59,99/year</p>
            </div>
            <div className={styles.a_tag}>
                <a href="#" target="_self" rel="noopener noreferrer">Change</a>
            </div>
        </div>  
    )
}

export default ComponentPlan;