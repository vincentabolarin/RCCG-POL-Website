import Image from "next/image";

import ModalWrapper from "./modalWrapper";
import styles from "../../styles/successModal.module.scss";

const SuccessModal = ({image, imageAlt, content}) => {
    return (
        <>
            <ModalWrapper>
                <div className={styles.container}>
                    <header>
                        {/* <div className={styles.title}></div> */}
                        <div className={styles.close}>
                            <Image src="/close-icon-48.png" width="36px" height="36px" />
                        </div>
                    </header>
                    <main>
                        <Image src={image} alt={imageAlt} width="72px" height="72px"/>
                        <p>{content}</p>
                    </main>
                </div>
            </ModalWrapper>
        </>
    );
}
 
export default SuccessModal;