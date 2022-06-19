import styles from "../styles/components/Gift.module.css";

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.header}></div>
      <div className={styles.body}></div>
      <span className={styles.ribbonH}></span>
      <span className={styles.ribbonV}></span>
    </div>
  );
}
