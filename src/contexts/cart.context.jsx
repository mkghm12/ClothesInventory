import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            }
            return cartItem;
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

    useEffect(() => {
        const totalCount = cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0);
        setCartCount(totalCount);
    }, [cartItems]);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}