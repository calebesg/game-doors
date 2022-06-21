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

function validateDoorsParams(doors: number, gift: number) {
  if (gift > doors) return false;
  if (gift < 1 || doors < 1) return false;
  if (gift > 15 || doors > 15) return false;

  return true;
}

export { createDoors, updateDoors, validateDoorsParams };
