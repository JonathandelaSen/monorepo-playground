import useAddPlantForm from '@/src/sections/plants/add_form/useAddPlantForm.ts'
import LabelErrorForm from '@/src/sections/plants/add_form/LabelErrorForm/LabelErrorForm.tsx'
import style from '@/src/sections/plants/add_form/AddPlantForm/AddPlantForm.module.css'

const AddPlantForm: React.FC = () => {
  const { onSubmit, register, errors } = useAddPlantForm()

  return (
    <form onSubmit={onSubmit} className={style.AddPlantForm}>
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <LabelErrorForm error={errors.name} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          {...register('description', { required: true })}
        />
        <LabelErrorForm error={errors.description} />
      </div>
      <button type="submit">Add Plant</button>
    </form>
  )
}

export default AddPlantForm
