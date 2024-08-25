import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import { deletePlantById, setPlants } from '@/src/sections/plants/slice.ts'
import {
  GetPlantsSupabaseRepository,
  Plant,
  PlantDeleter,
  PlantsGetter,
} from 'my-shared'
/*import PlantsGetter from "packages/shared/src/modules/plants/application/PlantsGetter.ts";
import PlantDeleter from '@/src/modules/plants/application/PlantDeleter'
import GetPlantsSupabaseRepository from '@/src/modules/plants/infrastructure/GetPlantsSupabaseRepository.ts'
import PlantsGetter from '@/src/modules/plants/application/PlantsGetter.ts'*/

const useDeletePlant = () => {
  const dispatch = useAppDispatch()

  return {
    deletePlantById: (plantId: string) => {
      dispatch(deletePlantById(plantId))
      new PlantDeleter(new GetPlantsSupabaseRepository())
        .run(plantId)
        .catch((error) => {
          //revert state
          console.error(error)
          new PlantsGetter(new GetPlantsSupabaseRepository())
            .run()
            .then((plants: Plant[]) => {
              dispatch(setPlants(plants))
            })
            .catch((error) => {
              console.error(error)
            })
        })
    },
  }
}

export default useDeletePlant
