import Container from "./Container";
import styles from "./Modal.module.css";

const Modal = ({ title, children, onCancel, onAccept }) => {
  return (
    <div className={styles.modal} onClick={onCancel}>
      <Container className={styles["modal-container"]}>
        <div className={styles["modal-title"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["modal-body"]}>
          {children}
        </div>
        <div className={styles["modal-footer"]}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onAccept}>Accept</button>
        </div>
      </Container>
    </div>
  );
};

export default Modal;
