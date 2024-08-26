import { useAppDispatch } from '../shared/hooks/hooks'
import { setPlants } from '../plants/redux/slice'
import { usePlantsSelector } from '../plants/redux/store'
import { useEffect } from 'react'
import { PlantsGetter, PlantsSupabaseRepository } from '../../modules'

const useGetPlants = () => {
  const dispatch = useAppDispatch()
  const plants = usePlantsSelector()
  useEffect(() => {
    new PlantsGetter(new PlantsSupabaseRepository())
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

export { useGetPlants }
