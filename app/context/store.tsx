"use client";

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type CartItemType = any; // Replace with the actual type of your cart items
type FavoriteType = any; // Replace with the actual type of your favorite items

interface ContextProps {
  cartItem: CartItemType[];
  setCartItem: Dispatch<SetStateAction<CartItemType[]>>;
  favorites: FavoriteType[];
  setFavorites: Dispatch<SetStateAction<FavoriteType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  cartItem: [],
  setCartItem: () => {}, // Default function
  favorites: [],
  setFavorites: () => {}, // Default function
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [cartItem, setCartItem] = useState<CartItemType[]>([]);
  const [favorites, setFavorites] = useState<FavoriteType[]>([]);

  return (
    <GlobalContext.Provider
      value={{ cartItem, setCartItem, favorites, setFavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
