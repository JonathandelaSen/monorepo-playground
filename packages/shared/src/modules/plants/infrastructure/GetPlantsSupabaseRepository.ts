import { Plant, PlantsRepository } from '@/src/modules'
import supabase from '@/src/modules/supabase/supabaseClient.ts'

export class GetPlantsSupabaseRepository implements PlantsRepository {
  async getPlants(): Promise<Plant[]> {
    const { data: plants, error } = await supabase.from('plants').select('*')
    if (error) {
      throw new Error(error.message)
    }
    return plants as Plant[]
  }

  async add(plant: Plant): Promise<void> {
    const { error } = await supabase.from('plants').insert(plant)
    if (error) {
      throw new Error(error.message)
    }
  }

  async delete(plantId: string): Promise<void> {
    const { error } = await supabase
      .from('plants')
      .delete()
      .match({ id: plantId })
    if (error) {
      throw new Error(error.message)
    }
  }
}
