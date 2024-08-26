import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '@/src/sections/shared/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch: () => AppDispatch = useDispatch

export { useAppSelector, useAppDispatch }
