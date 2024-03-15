import { create } from "zustand";

// Store state

export interface ProductStoreState {
  specificProduct?: SpecificProductType;
}

export interface ProductStore extends ProductStoreState {
  setProductState: (args: ProductStoreState["specificProduct"]) => void;
}

const initialState: Pick<ProductStore, keyof ProductStoreState> = {
  specificProduct: undefined,
};

const useProductStore = create<ProductStore>((set) => ({
  ...initialState,
  setProductState: (specificProduct) =>
    set((prevState) => ({ ...prevState, specificProduct })),
}));

// Store actions
export const setSpecificProductStoreState: (
  state: any
) => ProductStore["setProductState"] = (state: any) => state.setProductState;
export const selectSpecificProductStoreState: (
  state: any
) => ProductStoreState["specificProduct"] = (state: any) =>
  state.specificProduct;

export default useProductStore;
