import { useAppDispatch } from '../shared/hooks/hooks'
import {
  deletePlantById,
  addPlant as addPlanDispatchAction,
} from '../plants/redux/slice'

import { Plant, PlantAdder, PlantsSupabaseRepository } from '../../modules'

const useAddPlant = () => {
  const dispatch = useAppDispatch()
  const addPlant = (name: string, description: string, imageUrl?: string) => {
    const plant = {
      id: crypto.randomUUID(),
      name,
      description,
      image_url: imageUrl,
    } as Plant
    dispatch(addPlanDispatchAction(plant))

    new PlantAdder(new PlantsSupabaseRepository())
      .run(plant)
      .then(() => {})
      .catch((error) => {
        //revert state
        console.error(error)
        dispatch(deletePlantById(plant.id))
      })
  }
  return {
    addPlant,
  }
}

export { useAddPlant }
