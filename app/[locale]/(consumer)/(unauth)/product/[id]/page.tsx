import ProductMain from "@/app/components/Product/ProductMain";

import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = ({ params: { id } }: Props) => {
  return <ProductMain id={id} />;
  // return <div>Product Page</div>;
};

export default ProductPage;
