import { Plant } from '@/src/modules'

export interface PlantsRepository {
  getPlants(): Promise<Plant[]>
  add(plant: Plant): Promise<void>
  delete(plantId: string): Promise<void>
}
