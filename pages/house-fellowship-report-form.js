import { useEffect, useRef, useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app, firestore } from '../firebaseConfig';
import styles from '../styles/house-fellowship-report-form.module.scss';

import Navbar from '../components/Navbar';
import houseFellowships from '../constants/house-fellowship-centres.js';

import Image from 'next/image';
import SuccessModal from '../components/modals/successModal';

const HouseFellowshipReportForm = () => {
    const [displaySuccessModal, setDisplaySuccessModal] = useState(false);

    useEffect(() => {
        const container = document.getElementById("container");
        container.style.overflow = displaySuccessModal ? "auto" : "hiden";
    }, [displaySuccessModal]);

    const formRef = useRef();
    const dateRef = useRef();
    const centreRef = useRef();
    const menRef = useRef();
    const womenRef = useRef();
    const childrenRef = useRef();
    const offeringRef = useRef();

    const resetForm = () => {
        dateRef.current.value = "";
        centreRef.current.value = "";
        menRef.current.value = "";
        womenRef.current.value = "";
        childrenRef.current.value = "";
        offeringRef.current.value = "";
        formRef.reset();
    }

    const submitData = async (e) => {
        e.preventDefault();
        const date = dateRef.current.value;
        const centre = centreRef.current.value;
        const men = menRef.current.value;
        const women = womenRef.current.value;
        const children = childrenRef.current.value;
        const offering = offeringRef.current.value;

        try {
            const centerReportRef = await addDoc(collection(firestore, 'centres/' + centre + '/' + date), {
                date: date,
                time: serverTimestamp(),
                centre: centre,
                men: men,
                women: women,
                children: children,
                offering: offering
            });
            const dateReportRef = await addDoc(collection(firestore, 'dates/' + date + '/' + centre), {
                centre: centre,
                time: serverTimestamp(),
                centre: centre,
                men: men,
                women: women,
                children: children,
                offering: offering
            });
            setDisplaySuccessModal(!displaySuccessModal);
            resetForm();
        } catch(e) {
            console.log(e);
        }  
    }

    return (
        <Navbar>
            <div>
                <div className={styles.container} id="container">
                    <h2>Please, fill out the report of your House Fellowship Centre.</h2>

                    <form ref={formRef} className="form" onSubmit={submitData}>
                        <div>
                            <div className={styles.formItem}>
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" required ref={dateRef} />
                            </div>
                            
                            <div className={styles.formItem}>
                                <label htmlFor="centre">Centre</label>
                                <select name="centre" id="centre" required defaultValue="Select One" ref={centreRef}>
                                    <option value="Select One" disabled>Select One</option>
                                    {
                                        houseFellowships.map((centre) => {
                                            return <option key={centre.serialNumber} value={`${centre.centre} Centre`}>{centre.centre} Centre</option>
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
                                <input type="submit" name="submit" id="submit" value="Submit" onClick={submitData} />
                                {/* <button type="submit">Submit</button> */}
                            </div>

                            <div className={styles.formItem}>
                                <input type="reset" name="reset" id="reset" value="Reset" />
                                {/* <button type="reset">Reset</button> */}
                            </div>
                        </div>

                        <div className={`${styles.formItem} ${styles.image}`}>
                            <Image src="/church-building.svg" width="500px" height="500px" />
                        </div>
                    </form>
                    {displaySuccessModal && <SuccessModal display={displaySuccessModal} setDisplay={setDisplaySuccessModal} title={`Success`} image={"/success-icon.svg"} imageAlt={"Success Icon"} content = {`Your report has been submitted successfully.`} />}
                </div>
            </div>
        </Navbar>
    );
}
 
export default HouseFellowshipReportForm;