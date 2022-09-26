import React, {useReducer} from 'react'


export const addProductToCart = (product: { id: string; }, state: { cart: any; }) => {
    
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    )

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
    
      return { ...state, cart: updatedCart };
    };