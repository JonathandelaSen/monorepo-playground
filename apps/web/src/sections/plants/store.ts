import { Plant } from 'my-shared'
import { useAppSelector } from 'src/sections/shared/hooks/store.ts'

export const usePlantsSelector: () => Plant[] = () =>
  useAppSelector((state) => state.plants)
