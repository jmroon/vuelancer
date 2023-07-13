enum WeaponType {
  LASER = 'laser',
  KINETIC = 'kinetic'
}

export class Weapon {
  public damage: number
  public fireRate: number
  public cost: number

  constructor() {
    this.damage = Math.random() * 10
    this.fireRate = 0.5 + Math.random()
    this.cost = 50 + Math.random() * 50
  }
}
