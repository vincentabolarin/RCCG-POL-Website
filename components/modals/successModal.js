import { useState } from "react";
import Image from "next/image";

import ModalWrapper from "./modalWrapper";
import styles from "../../styles/successModal.module.scss";

const SuccessModal = ({display, setDisplay, title, image, imageAlt, content}) => {
    // const [display, setDisplay] = useState(true);
    const closeModal = () => {
        setDisplay(!setDisplay);
    }

    return (
        <>
        {display &&
            <ModalWrapper>
                <div className={styles.container}>
                    <header>
                        <div className={styles.title}>{title}</div>
                        <div onClick={closeModal} className={styles.close}>
                            <Image src="/close-icon-48.png" width="36px" height="36px" />
                        </div>
                    </header>
                    <main>
                        <Image src={image} alt={imageAlt} width="72px" height="72px"/>
                        <p className={styles.content}>{content}</p>
                    </main>
                </div>
            </ModalWrapper>}
        </>
    );
}
 
export default SuccessModal;