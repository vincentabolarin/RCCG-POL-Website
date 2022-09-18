import styles from './house-fellowship.module.css';

import Navbar from '../components/Navbar';

const HouseFellowship = () => {
    return (
        <Navbar>
            <div className={styles.container}>
                <form>
                    <label>House Fellowship Centre</label>
                    <input />

                    <label>Men</label>
                    <input />

                    <label>Women</label>
                    <input />

                    <label>Children</label>
                    <input />

                    <label>Offering in Naira</label>
                    <input />
                </form>
            </div>
        </Navbar>
    );
}
 
export default HouseFellowship;