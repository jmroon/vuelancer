import { Ship } from './Ship'

export class Player {
  public ship: Ship

  constructor(public name: string) {
    this.ship = new Ship()
  }
}
