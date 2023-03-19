import styles from '../styles/house-fellowship-report-form.module.scss';

import Navbar from '../components/Navbar';
import houseFellowships from '../constants/house-fellowship-centres.js';

const HouseFellowshipReportForm = () => {
    return (
        <Navbar>
            <div>
                <div className={styles.container}>
                    <h2>Please, fill out the report of your House Fellowship Centre.</h2>

                    <form className="form">
                        <div className={styles.formItem}>
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date" />
                        </div>
                        
                        <div className={styles.formItem}>
                            <label htmlFor="centre">Select your centre</label>
                            <select name="centre" id="centre">
                                {
                                    houseFellowships.map((centre) => {
                                        <option value={centre.centre}>{centre.centre}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className={styles.formItem}>
                            <label htmlFor="men">Men</label>
                            <input type="number" name="men" id="men" />
                        </div>

                        <div className={styles.formItem}>
                            <label htmlFor="women">Women</label>
                            <input type="number" name="women" id="women" />
                        </div>

                        <div className={styles.formItem}>
                            <label htmlFor="children">Children</label>
                            <input type="number" name="children" id="children" />
                        </div>

                        <div className={styles.formItem}>
                            <label htmlFor="offering">Offering (₦)</label>
                            <input type="number" name="offering" id="offering" />
                        </div>

                        <div className={styles.formItem}>
                            <input type="submit" name="submit" id="submit" value="Submit" />
                        </div>

                        <div className={styles.formItem}>
                            <input type="reset" name="reset" id="reset" value="Reset" />
                        </div>
                    </form>
                </div>
            </div>
        </Navbar>
    );
}
 
export default HouseFellowshipReportForm;