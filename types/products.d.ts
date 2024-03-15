declare type CategoryType = {
  id?: number;
  name?: string;
};

declare type SizeType = {
  id?: number;
  specificId?: number;
  name?: string;
  stock?: number;
  productStatus?: ProductStatus | string;
};
declare type SpecificProductType = {
  specificId?: number;
  genericId?: number;
  name?: string;
  price?: number;
  slug?: string;
  images: string[];
  sizes?: SizeType[];
  productStatus?: ProductStatus | string;
};

declare type ProductType = {
  genericId?: number;
  productStatus: ProductStatus | string;
  name?: string;
  description?: string;
  categoryId?: number;
  specificList?: SpecificProductType[];
  [key: string]: string | number;
};

declare type ProductRequestBody = {
  [key: string]: string | number;
} & ProductType;

declare type ProductResponseType = {
  category: CategoryType | null;
  specificList: SpecificProductType[];
  genericProduct: ProductType | null;
};

declare enum ProductStatus {
  IN_STOCK,
  OUT_OF_STOCK,
}
