import DoorModel from "../models/DoorModel";
import styles from "../styles/components/Door.module.css";
import Gift from "./Gift";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door({ value: door, onChange }: DoorProps) {
  const doorIsSelected = door.selected && !door.opened;

  const openDoor = function (e) {
    e.stopPropagation();
    onChange(door.open());
  };

  const renderDoor = function () {
    return (
      <div className={styles.door}>
        <span className={styles.number}>{door.number}</span>
        <span className={styles.knob} onClick={openDoor}></span>
      </div>
    );
  };

  return (
    <div
      className={styles.area}
      onClick={(e) => onChange(door.changeSelected())}
    >
      <div
        className={`${styles.frame} ${doorIsSelected ? styles.selected : ""}`}
      >
        {door.opened ? door.hasGift ? <Gift /> : null : renderDoor()}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
