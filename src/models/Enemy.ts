import { Ship } from './Ship'

export class Enemy {
  public ship: Ship
  public bounty: number

  constructor() {
    this.ship = new Ship()
    this.bounty = 10 + Math.random() * 10
  }
}
