import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/house-fellowship-centres.module.css';
import houseFellowships from '../constants/house-fellowship-centres.js';

const HouseFellowshipCentres = () => {

    // const [houseFellowships, setHouseFellowships] = useState([]);

    // const getHouseFellowships=()=>{
    //     fetch('http://localhost:3001/house-fellowship-centres')
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         return setHouseFellowships(data);
    //         console.log(houseFellowships)
    //       });
    // }
    // useEffect(()=>{
    //     getHouseFellowships();
    // }, [])

    console.log(houseFellowships);

    return (
        <Navbar>
            <div className={styles.container}>
                <h1 className={styles.title}>HOUSE FELLOWSHIP CENTRES</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Center</th>
                            <th>Address</th>
                            <th>Coordinator</th>
                            <th>Regional Coordinator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houseFellowships.map((houseFellowship) => {
                                return(
                                    <tr>
                                        <td>{ houseFellowship.serialNumber }</td>
                                        <td>{ houseFellowship.centre }</td>
                                        <td>{ houseFellowship.address }</td>
                                        <td>{ houseFellowship.coordinator }</td>
                                        <td>{ houseFellowship.regionalCoordinator }</td>
                                    </tr>
                                )
                            })
                        }    
                    </tbody>
                </table>
            </div>
        </Navbar>
    );
}
 
export default HouseFellowshipCentres;