import styles from "../styles/components/Door.module.css";

export default function Door() {
  return (
    <div className={styles.area}>
      <div className={styles.frame}>
        <div className={styles.door}>
          <span className={styles.number}>3</span>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
