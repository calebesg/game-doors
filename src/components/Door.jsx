import styles from "../styles/components/Door.module.css";

export default function Door({ selected }) {
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected ? styles.selected : ""}`}>
        <div className={styles.door}>
          <span className={styles.number}>3</span>
          <span className={styles.knob}></span>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
