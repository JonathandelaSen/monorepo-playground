import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import {
  addPlant as addPlanDispatchAction,
  deletePlantById,
} from '@/src/sections/plants/slice.ts'
import { GetPlantsSupabaseRepository, PlantAdder, Plant } from 'my-shared'

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

    new PlantAdder(new GetPlantsSupabaseRepository())
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

export default useAddPlant
