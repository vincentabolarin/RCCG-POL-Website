import { useRef } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from '../firebaseConfig.js';
import styles from '../styles/house-fellowship-report-form.module.scss';

import Navbar from '../components/Navbar';
import houseFellowships from '../constants/house-fellowship-centres.js';

import Image from 'next/image';

const HouseFellowshipReportForm = () => {

    const dateRef = useRef();
    const centreRef = useRef();
    const menRef = useRef();
    const womenRef = useRef();
    const childrenRef = useRef();
    const offeringRef = useRef();

    const submitData = (date, centre, men, women, children, offering) => {

        // const date = dateRef.current.value;
        // const centre = centreRef.current.value;
        // const men = menRef.current.value;
        // const women = womenRef.current.value;
        // const children = childrenRef.current.value;
        // const offering = offeringRef.current.value;

        // const db = getDatabase();
        // set(ref(db, 'centres/' + centre), {
        //   date: date,
        //   men: men,
        //   women: women,
        //   children: children,
        //   offering: offering
        // });
    }

    return (
        <Navbar>
            <div>
                <div className={styles.container}>
                    <h2>Please, fill out the report of your House Fellowship Centre.</h2>

                    <form className="form" onSubmit={submitData()}>
                        <div>
                            <div className={styles.formItem}>
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" required ref={dateRef} />
                            </div>
                            
                            <div className={styles.formItem}>
                                <label htmlFor="centre">Centre</label>
                                <select name="centre" id="centre" required ref={centreRef}>
                                    <option value="select one" disabled>Select One</option>
                                    {
                                        houseFellowships.map((centre) => {
                                            return <option value={`${centre.centre} Centre`} Centre>{centre.centre} Centre</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className={styles.formItem}>
                                <label htmlFor="men">No. of Men</label>
                                <input type="number" name="men" id="men" placeholder='Enter the number of men' required ref={menRef} />
                            </div>

                            <div className={styles.formItem}>
                                <label htmlFor="women">No. of Women</label>
                                <input type="number" name="women" id="women" placeholder='Enter the number of women' required ref={womenRef} />
                            </div>

                            <div className={styles.formItem}>
                                <label htmlFor="children">No. of Children</label>
                                <input type="number" name="children" id="children" placeholder='Enter the number of children' required ref={childrenRef} />
                            </div>

                            <div className={styles.formItem}>
                                <label htmlFor="offering">Offering (₦)</label>
                                <input type="number" name="offering" id="offering" placeholder='Enter the total Offering amount' required ref={offeringRef} />
                            </div>

                            <div className={styles.formItem}>
                                <input type="submit" name="submit" id="submit" value="Submit" />
                            </div>

                            <div className={styles.formItem}>
                                <input type="reset" name="reset" id="reset" value="Reset" />
                            </div>
                        </div>

                        <div className={`${styles.formItem} ${styles.image}`}>
                            <Image src="/church-building.svg" width="500px" height="500px" />
                        </div>
                    </form>
                </div>
            </div>
        </Navbar>
    );
}
 
export default HouseFellowshipReportForm;