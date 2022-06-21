import styles from "../styles/pages/Home.module.css";
import Card from "../components/Card";
import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <Card bgColor="rgb(255, 56, 83)">
          <h1 className={styles.title}>Monty Holl</h1>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card bgColor="rgb(56, 255, 162)">
          <Link href={`/game/5/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </main>
  );
}
