export default class DoorModel {
  #number: number;
  #selected: boolean;
  #opened: boolean;
  #hasGift: boolean;

  constructor(
    number: number,
    selected = false,
    opened = false,
    hasGift = false
  ) {
    this.#number = number;
    this.#selected = selected;
    this.#opened = opened;
    this.#hasGift = hasGift;
  }

  get number() {
    return this.#number;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  get hasGift() {
    return this.#hasGift;
  }

  changeSelected() {
    const selected = !this.selected;
    return new DoorModel(this.number, selected, this.opened, this.hasGift);
  }

  unselect() {
    const selected = false;
    return new DoorModel(this.number, selected, this.opened, this.hasGift);
  }

  open() {
    const opened = true;
    return new DoorModel(this.number, this.selected, opened, this.hasGift);
  }
}
