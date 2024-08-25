import { Plant, PlantsRepository } from '@/src/modules'

export class PlantAdder {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plant: Plant) {
    await this.plantsRepository.add(plant)
  }
}
