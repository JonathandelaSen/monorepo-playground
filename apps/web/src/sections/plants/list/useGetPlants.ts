import { usePlantsSelector } from '@/src/sections/plants/store.ts'
import { setPlants } from '@/src/sections/plants/slice.ts'
import { useAppDispatch } from '@/src/sections/shared/hooks/store.ts'
import { useEffect } from 'react'
import { GetPlantsSupabaseRepository, PlantsGetter } from 'my-shared'

const useGetPlants = () => {
  const dispatch = useAppDispatch()
  const plants = usePlantsSelector()
  useEffect(() => {
    new PlantsGetter(new GetPlantsSupabaseRepository())
      .run()
      .then((plants) => {
        dispatch(setPlants(plants))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return {
    plants,
  }
}

export default useGetPlants
