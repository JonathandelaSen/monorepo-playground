import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Plant } from 'my-shared'

const plants: Plant[] = []

export const plantsSlice = createSlice({
  name: 'plants',
  initialState: plants,
  reducers: {
    deletePlantById: (state, action: PayloadAction<string>) => {
      return state.filter((plant) => plant.id !== action.payload)
    },
    addPlant: (state, action: PayloadAction<Plant>) => {
      state.push(action.payload)
    },
    setPlants: (state, action: PayloadAction<Plant[]>) => {
      //reset array
      state.splice(0, state.length)
      state.push(...action.payload)
    },
  },
})

export default plantsSlice.reducer
export const { deletePlantById, addPlant, setPlants } = plantsSlice.actions
