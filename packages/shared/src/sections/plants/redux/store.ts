import { Plant } from '../../../modules'
import { useAppSelector } from '../../shared'

const usePlantsSelector: () => Plant[] = () =>
  useAppSelector((state) => state.plants)

export { usePlantsSelector }
