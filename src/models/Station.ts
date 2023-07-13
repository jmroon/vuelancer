import { Weapon } from './Weapon'

export class Station {
  public weapons: Weapon[]

  constructor() {
    this.weapons = []
    for (let i = 0; i < 10; i++) {
      this.weapons.push(new Weapon())
    }
  }
}
