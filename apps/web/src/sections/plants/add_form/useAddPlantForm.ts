import { useForm } from 'react-hook-form'
import { useAddPlant } from 'my-shared'
type FormData = {
  name: string
  description: string
}

const useAddPlantForm = () => {
  const { addPlant } = useAddPlant()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ reValidateMode: 'onSubmit' })

  const onSubmit = handleSubmit((data) => {
    reset()
    addPlant(data.name, data.description, '')
  })

  return { register, onSubmit, errors }
}

export default useAddPlantForm
