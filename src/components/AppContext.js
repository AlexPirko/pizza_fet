'use client';
import { SessionProvider } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext({});

export function cartProductPrice(cartProduct) {
    let price = cartProduct.basePrice * cartProduct.quantity;
    if (cartProduct.size) {
        price += cartProduct.size.price;
    }
    if (cartProduct.extras?.length > 0) {
        for (const extra of cartProduct.extras) {
            price += extra.price;
        }
    }
    return price;
}

export function AppProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const ls = typeof window !== 'undefined' ? window.localStorage : null;

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function clearCart() {
        setCartProducts([]);
        saveCartProductsToLocalStorage([]);
    }

    function removeCartProduct(indexToRemove) {
        setCartProducts((prevCartProducts) => {
            const newCartProducts = prevCartProducts.filter(
                (product) => product._id !== indexToRemove,
            );
            saveCartProductsToLocalStorage(newCartProducts);
            return newCartProducts;
        });
        toast.success('Product removed');
    }

    function addQnt(id) {
        setCartProducts((prevProducts) => {
            prevProducts.filter((product) => {
                if (product._id === id) {
                    product.quantity = product.quantity + 0.5;
                }
            });

            saveCartProductsToLocalStorage([...prevProducts]);
            return [...prevProducts];
        });
    }

    function subtrQnt(id) {
        setCartProducts((prevProducts) => {
            prevProducts.filter((product) => {
                if (product._id === id) {
                    product.quantity = product.quantity - 0.5;
                }
            });

            saveCartProductsToLocalStorage([...prevProducts]);
            return [...prevProducts];
        });
    }

    function saveCartProductsToLocalStorage(cartProducts) {
        if (ls) {
            ls.setItem('cart', JSON.stringify(cartProducts));
        }
    }

    function addToCart(product, size = null, extras = [], quantity = 1) {
        setCartProducts((prevProducts) => {
            const cartProduct = { ...product, size, extras, quantity };
            const newProducts = [...prevProducts, cartProduct];
            saveCartProductsToLocalStorage(newProducts);
            return newProducts;
        });
        toast.success('Product has been added!');
    }

    return (
        <SessionProvider>
            <CartContext.Provider
                value={{
                    cartProducts,
                    setCartProducts,
                    addToCart,
                    addQnt,
                    subtrQnt,
                    removeCartProduct,
                    clearCart,
                }}>
                {children}
            </CartContext.Provider>
        </SessionProvider>
    );
}
