import { FC } from 'react'
import styles from '@/src/sections/plants/list/PlantItem/PlantItem.module.css'
import { Plant } from 'my-shared'

type Pops = {
  plant: Plant
  deletePlantById: (plantId: string) => void
}
const PlantItem: FC<Pops> = ({ plant, deletePlantById }) => {
  return (
    <div key={plant.id} className={styles.plantContainer}>
      <h1>{plant.name}</h1>
      <p>{plant.description}</p>
      <button
        onClick={() => {
          deletePlantById(plant.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default PlantItem
