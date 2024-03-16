import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartStoreState {
  cart: CartType;
  newItem: CartItemType | null;
}

export interface CartStore extends CartStoreState {
  addToCart: (
    specificProduct: SpecificProductType,
    genericProduct: ProductType,
    sizeId: number,
    sizeName: string,
    categoryName: string,
    quantity: number
  ) => void;
  removeFromCart: (
    specificProduct: SpecificProductType,
    sizeId: number,
    quantity: number
  ) => void;
}

const initialState: Pick<CartStore, keyof CartStoreState> = {
  cart: {
    quantity: 0,
    total: 0,
    items: [],
  },
  newItem: null,
};

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      ...initialState,
      addToCart: (
        specificProduct,
        genericProduct,
        sizeId,
        sizeName,
        categoryName,
        quantity
      ) =>
        set((prevState) => {
          const {
            cart: { items },
          } = prevState;
          const newItems = [...items];
          const _currentIndex = newItems.findIndex(
            (v) =>
              v.specificProduct.specificId === specificProduct.specificId &&
              v.sizeId === sizeId
          );
          const addPrice = specificProduct.price! * quantity;
          const addQuantity = quantity;
          if (_currentIndex !== -1) {
            newItems[_currentIndex].quantity += quantity;
            newItems[_currentIndex].total += addPrice;
          } else {
            newItems.push({
              specificProduct,
              genericProduct,
              sizeId,
              sizeName,
              categoryName,
              quantity,
              total: addPrice,
            });
          }
          return {
            ...prevState,
            newItem: {
              specificProduct,
              genericProduct,
              sizeId,
              sizeName,
              categoryName,
              quantity,
              total: addPrice,
            },
            cart: {
              items: [...newItems],
              quantity: prevState.cart.quantity + addQuantity,
              total: prevState.cart.total + addPrice,
            },
          };
        }),
      removeFromCart: (specificProduct, sizeId, quantity) =>
        set((prevState) => {
          const {
            cart: { items },
          } = prevState;
          const newItems = [...items];
          const _currentIndex = newItems.findIndex(
            (v) =>
              v.specificProduct.specificId === specificProduct.specificId &&
              v.sizeId === sizeId
          );
          const removePrice = specificProduct.price! * quantity;
          const removeQuantity = quantity;
          if (_currentIndex === -1)
            return {
              ...prevState,
            };

          newItems[_currentIndex].quantity -= quantity;
          newItems[_currentIndex].total -= removePrice;
          if (newItems[_currentIndex].quantity <= 0) {
            newItems.splice(_currentIndex, 1);
          }

          return {
            ...prevState,
            cart: {
              items: [...newItems],
              quantity: prevState.cart.quantity - removeQuantity,
              total: prevState.cart.total - removePrice,
            },
          };
        }),
    }),
    {
      name: "user_cart_store",
    }
  )
);
//
export const addToCartStoreState: (state: any) => CartStore["addToCart"] = (
  state
) => state.addToCart;

export const removeFromCartStoreState: (
  state: any
) => CartStore["removeFromCart"] = (state) => state.removeFromCart;

export const selectCartStoreState: (state: any) => CartStoreState["cart"] = (
  state
) => state.cart;

export const selectNewItemStoreState: (
  state: any
) => CartStoreState["newItem"] = (state) => state.newItem;

export default useCartStore;
