import { Weapon } from './Weapon'

export class Ship {
  public hp: number
  public weapon: Weapon

  constructor() {
    this.weapon = new Weapon()
    this.hp = Math.floor(Math.random() * 100)
  }
}
