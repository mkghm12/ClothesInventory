import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState} from "./cart.reducer";

const selectCartReducer = (state:RootState): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectTotalCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0)
);

export const selectTotalCartPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalPrice, currentItem) => totalPrice + currentItem.quantity * currentItem.price, 0)
);