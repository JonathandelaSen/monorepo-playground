import { PlantsRepository } from '@/src/modules'

export class PlantDeleter {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plantId: string) {
    await this.plantsRepository.delete(plantId)
  }
}
