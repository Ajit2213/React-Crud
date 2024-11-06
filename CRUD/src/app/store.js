import { configureStore } from '@reduxjs/toolkit'

import CrudReducer from "../features/Crud/CrudSlice"
export const store = configureStore({
  reducer:CrudReducer,
})