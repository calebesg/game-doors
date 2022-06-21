import styles from "../styles/pages/Home.module.css";
import Card from "../components/Card";
import Link from "../../node_modules/next/link";
import InputNumber from "../components/InputNumber";
import { useState } from "react";

export default function Home() {
  const [doorsCount, setDoorsCount] = useState(3);
  const [drawnDoor, setDrawnDoor] = useState(2);

  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <Card bgColor="rgb(255, 56, 83)">
          <h1 className={styles.title}>Monty Holl</h1>
        </Card>

        <Card>
          <InputNumber
            label="Qtd portas?"
            value={doorsCount}
            onChange={setDoorsCount}
          />
        </Card>

        <Card>
          <InputNumber
            label="Porta Sorteada?"
            value={drawnDoor}
            onChange={setDrawnDoor}
          />
        </Card>

        <Card bgColor="rgb(56, 255, 162)">
          <Link href={`/game/${doorsCount}/${drawnDoor}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </main>
  );
}
