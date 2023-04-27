import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/counter/cartSlice'
export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})