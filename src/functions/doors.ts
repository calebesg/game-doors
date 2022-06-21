import DoorModel from "../models/DoorModel";

function createDoors(qtd: number, selected: number): DoorModel[] {
  return Array.from({ length: qtd }, (_, index) => {
    const number = index + 1;
    const hasGift = number === selected;
    return new DoorModel(number, false, false, hasGift);
  });
}

function updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
  return doors.map((door) => {
    if (door.number === updatedDoor.number) return updatedDoor;
    return updatedDoor.opened ? door : door.unselect();
  });
}

export { createDoors, updateDoors };
