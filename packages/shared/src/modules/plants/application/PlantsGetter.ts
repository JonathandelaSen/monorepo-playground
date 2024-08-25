import { Plant, PlantsRepository } from '@/src/modules'

export class PlantsGetter {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(): Promise<Plant[]> {
    return this.plantsRepository.getPlants()
  }
}
