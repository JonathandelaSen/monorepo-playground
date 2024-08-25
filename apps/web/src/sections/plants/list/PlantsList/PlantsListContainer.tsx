import useDeletePlant from '@/src/sections/plants/list/useDeletePlant.ts'
import PlantsList from '@/src/sections/plants/list/PlantsList/PlantsList.tsx'
import useGetPlants from '@/src/sections/plants/list/useGetPlants.ts'

const PlantsListContainer = () => {
  const { plants } = useGetPlants()
  const { deletePlantById } = useDeletePlant()

  return (
    <div style={{ margin: '20px 0px' }}>
      <PlantsList
        plants={plants}
        deletePlantById={(plantId: string) => {
          deletePlantById(plantId)
        }}
      />
    </div>
  )
}

export default PlantsListContainer
