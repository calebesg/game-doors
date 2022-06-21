import styles from "../styles/components/Card.module.css";

interface CardProps {
  bgColor?: string;
  children?: any;
}

export default function Card({ bgColor, children }: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor || "#fff" }}>
      {children}
    </div>
  );
}
