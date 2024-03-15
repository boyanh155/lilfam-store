declare type CartItemType = {
  specificProduct: SpecificProductType;
  genericProduct: ProductType;
  sizeId: number;
  sizeName: string;
  quantity: number;
  total: number;
};

declare type CartType = {
  quantity: number;
  total: number;
  items: CartItemType[] | [];
};
