import { useEffect, useState } from "react";
import Link from "../../../../node_modules/next/link";
import { useRouter } from "../../../../node_modules/next/router";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from "../../../styles/pages/Game.module.css";

export default function game() {
  const [doors, setDoors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { doors, hasgift } = router.query;

    setDoors(createDoors(+doors, +hasgift));
  }, [router?.query]);

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
    <main className={styles.game}>
      <div className={styles.controls}>
        <Link href="/">
          <button className={styles.comeback}>Sair do Jogo</button>
        </Link>
      </div>
      <div className={styles.doors}>{renderDoors()}</div>
    </main>
  );
}
