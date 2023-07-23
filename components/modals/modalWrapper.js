import styles from "../../styles/modalWrapper.module.scss";

const ModalWrapper = (props) => {
    return (
        <>
            <div className={styles.backdrop}>
                <div className={styles.container}>
                    {props.children}
                </div>
            </div>
        </>
    );
}
 
export default ModalWrapper;