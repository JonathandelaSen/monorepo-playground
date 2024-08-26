import { deletePlantById, setPlants } from '../plants/redux/slice'
import {
  Plant,
  PlantDeleter,
  PlantsGetter,
  PlantsSupabaseRepository,
} from '../../modules'
import { useAppDispatch } from '../../sections'
/*import PlantsGetter from "packages/shared/src/modules/plants/application/PlantsGetter.ts";
import PlantDeleter from '@/src/modules/plants/application/PlantDeleter'
import GetPlantsSupabaseRepository from '@/src/modules/plants/infrastructure/GetPlantsSupabaseRepository.ts'
import PlantsGetter from '@/src/modules/plants/application/PlantsGetter.ts'*/

const useDeletePlant = () => {
  const dispatch = useAppDispatch()

  return {
    deletePlantById: (plantId: string) => {
      dispatch(deletePlantById(plantId))
      new PlantDeleter(new PlantsSupabaseRepository())
        .run(plantId)
        .catch((error) => {
          //revert state
          console.error(error)
          new PlantsGetter(new PlantsSupabaseRepository())
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

export { useDeletePlant }
