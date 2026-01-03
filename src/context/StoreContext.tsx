import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, allProducts } from "@/data/products";

type CartItem = { id: number; qty: number };

interface StoreContextValue {
  cart: CartItem[];
  wishlist: number[]; // product ids
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQty: (productId: number, qty: number) => void;
  clearCart: () => void;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isWishlisted: (productId: number) => boolean;
  cartCount: number;
  wishlistCount: number;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

const CART_KEY = "sowdha_cart_v1";
const WISHLIST_KEY = "sowdha_wishlist_v1";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem(WISHLIST_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  const addToCart = (product: Product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { id: product.id, qty }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateCartQty = (productId: number, qty: number) => {
    setCart((prev) => prev.map((p) => (p.id === productId ? { ...p, qty } : p)));
  };

  const clearCart = () => setCart([]);

  const addToWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const isWishlisted = (productId: number) => wishlist.includes(productId);

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);
  const wishlistCount = wishlist.length;

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        cartCount,
        wishlistCount
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};
