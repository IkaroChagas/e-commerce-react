import * as types from '../../Actions/actionTypes';


export const cartReducer = (state = [], action: { type: any; payload: { [x: string]: any; id?: string; }; productId: string; }) => {
    let doesItemExist;
    switch (action.type) {
        case types.ADD_TO_CART:
            doesItemExist = false;
            const newState = state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    doesItemExist = true;
                }
                return item;
            });
            if (doesItemExist) {
                return newState;
            }
            return [...state, { ...action.payload, quantity: 1 }];

        case types.REMOVE_FROM_CART:
            const newCartState = state.filter((item) => {
                if (item.Id === action.productId) {
                    return false;
                }
                return true;
            });
            return newCartState;

        case types.UPDATE_CART:
            const cartFormArr = Object.keys(action.payload).map((key, index) => {
                return action.payload[key];
            });

            doesItemExist = false;

            const newProdCartState = state.map((item) => {
                let itemFound = cartFormArr.find((element) => element.Id === item.Id);
                if (itemFound) {
                    item.quantity = itemFound.quantity;
                    doesItemExist = true;
                }
                return item;
            });

            if (doesItemExist) {
                return newProdCartState;
            }

            return state;

        default:
            return state;
    }
}