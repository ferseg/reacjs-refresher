import styles from "./MeetupDetail.module.css";

const MeetupDetail = ({ imgUrl, alt, title, address, description }) => {
  return (
    <>
      <section className={styles.detail}>
        <img
          src={imgUrl}
          alt={alt}
        />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </section>
    </>
  );
};

export default MeetupDetail;
