const MAX_SOLAR_SYSTEMS = 100
let numberOfSolarSystems = 0

export class SolarSystem {
  public neighbours: { distance: number; system: SolarSystem }[]

  constructor() {
    this.neighbours = []
    for (let i = 0; i <= 2; i++) {
      if (numberOfSolarSystems <= MAX_SOLAR_SYSTEMS) {
        console.log(numberOfSolarSystems)
        numberOfSolarSystems++
        this.neighbours.push({ distance: Math.random() * 10, system: new SolarSystem() })
      }
    }
  }
}
