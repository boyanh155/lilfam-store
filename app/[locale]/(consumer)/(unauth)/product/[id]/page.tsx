import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async({ params: { id } }: Props) => {
  const productResult = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "force-cache",
  });
  const product = await productResult.json()
  return <div>{product}</div>;
};

export default ProductPage;
