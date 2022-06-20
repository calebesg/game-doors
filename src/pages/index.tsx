import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../models/DoorModel";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [door, setDoor] = useState(new DoorModel(1));

  return (
    <main
      className={styles.main}
      style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
    >
      <Door value={door} onChange={(newDoor) => setDoor(newDoor)} />
    </main>
  );
}
