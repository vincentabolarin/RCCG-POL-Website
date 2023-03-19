import styles from '../styles/house-fellowship.module.css';

import Navbar from '../components/Navbar';
import Link from 'next/link';

const HouseFellowship = () => {
    return (
        <Navbar>
            <div className={styles.container}>
                <div className={styles.welcome}>
                    <h2 className={styles.heading}>Welcome To The</h2>
                    <h2 className={`${styles.heading} ${styles.houseFellowship}`}>House Fellowship</h2>
                    <h2 className={styles.heading}>Module!</h2>
                </div>

                <div className={styles.buttonsContainer}>
                    <button className={styles.button}><Link href='/house-fellowship-centres'>View Centres</Link></button>
                    <button className={styles.button}><Link href='/house-fellowship-report-form'>Submit Report</Link></button>
                </div>
                
            </div>
        </Navbar>
    );
}
 
export default HouseFellowship;