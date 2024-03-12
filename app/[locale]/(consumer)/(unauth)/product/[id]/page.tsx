import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params: { id } }: Props) => {
  const productResult = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "force-cache",
    }
  );

  console.log(productResult);
  const product = await productResult.json();
  console.log(product);
  return <div></div>;
  // return <div>Product Page</div>;
};

export default ProductPage;
