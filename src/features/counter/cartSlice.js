import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    quantity:0,
    totalAmount:0,
    cart:[]
  },
  reducers: {
    
    addToCart: (state,{payload}) => {

      const isExist = state.cart.find(item=> item.id === payload.id)
      if(isExist){
       return state
      }
      else{
         // state.cart.push(payload)
     state.cart=[...state.cart,{...payload,quantity:1}]
      state.quantity++;
      state.totalAmount+=payload.price;
      } 
    
    },

    removeFromCart:(state,{payload})=>{
      state.cart = state.cart.filter(item=> item.id !== payload.id)
      state.quantity --;
      state.totalAmount-=payload.price
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer