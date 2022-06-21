import styles from "../styles/components/InputNumber.module.css";

interface InputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function InputNumber({
  label,
  value,
  onChange,
}: InputNumberProps) {
  const increment = function () {
    value < 15 && onChange(value + 1);
  };

  const decrement = function () {
    value > 1 && onChange(value - 1);
  };

  return (
    <div className={styles.input}>
      <div className={styles.label}>{label}</div>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>
          -
        </button>
        <button className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
