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

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === productToRemove.id) {
            return {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
        }
        return cartItem;
    });
}

const clearItem = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeAllItemsFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const totalCount = cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0);
        setCartCount(totalCount);
    }, [cartItems]);

    useEffect(() => {
        const totalCartPrice = cartItems.reduce((totalPrice, currentItem) => totalPrice + currentItem.quantity * currentItem.price, 0);
        setCartTotal(totalCartPrice);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems(clearItem(cartItems, productToRemove));
    }

    const value = {
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        addItemToCart,
        setIsCartOpen,
        removeItemFromCart,
        clearItemFromCart
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}