import styles from './navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbarItems}>
                    <div className={styles.left}>
                        <Image src="/rccg-logo.png" width="70px" height="70px" />
                        <div className={styles.logoText}>
                            <h2 className={styles.title}>The Redeemed Christian Church of God</h2>
                            <h2 className={styles.subtitle}>Path of Life Parish</h2>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <ul>
                            <li className={styles.menuItem}>
                                <Link href="/sermon-notes">
                                    Sermon Notes
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link href="/house-fellowship">
                                    House Fellowship
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                {props.children}
            </div>
        </>
    );
}
 
export default Navbar;