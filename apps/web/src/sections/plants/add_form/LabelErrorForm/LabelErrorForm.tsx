import { FieldError } from 'react-hook-form'
import styles from '@/src/sections/plants/add_form/LabelErrorForm/LabelErrorForm.module.css'

const LabelErrorForm = ({ error }: { error: FieldError | undefined }) => {
  if (!error) return null
  return error.type === 'required' ? (
    <p role="alert" className={styles.LabelErrorForm}>
      {error.message || 'Required'}
    </p>
  ) : null
}

export default LabelErrorForm
