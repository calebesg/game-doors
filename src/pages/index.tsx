import { useState } from "react";
import Door from "../components/Door";
import { createDoors, updateDoors } from "../functions/doors";
import DoorModel from "../models/DoorModel";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  const renderDoors = function () {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  };

  return (
    <main
      className={styles.main}
      style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
    >
      {renderDoors()}
    </main>
  );
}
