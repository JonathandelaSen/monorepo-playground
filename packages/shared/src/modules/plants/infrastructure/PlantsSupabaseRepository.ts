import { type Database, Plant, PlantsRepository } from '@/src/modules'
import { initSupabase } from '../../supabase/supabaseClient'
import { SupabaseClient } from '@supabase/supabase-js'
import { supabaseConfig } from '../../../config'
export class PlantsSupabaseRepository implements PlantsRepository {
  private supabaseClient: SupabaseClient<Database>

  constructor() {
    this.supabaseClient = initSupabase(
      supabaseConfig.getSupabaseConfig().url,
      supabaseConfig.getSupabaseConfig().anonKey,
    )
  }
  async getPlants(): Promise<Plant[]> {
    const { data: plants, error } = await this.supabaseClient
      .from('plants')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    return plants as Plant[]
  }

  async add(plant: Plant): Promise<void> {
    const { error } = await this.supabaseClient.from('plants').insert(plant)
    if (error) {
      throw new Error(error.message)
    }
  }

  async delete(plantId: string): Promise<void> {
    const { error } = await this.supabaseClient
      .from('plants')
      .delete()
      .match({ id: plantId })
    if (error) {
      throw new Error(error.message)
    }
  }
}
