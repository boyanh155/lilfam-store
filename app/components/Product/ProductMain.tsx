"use client";

import { useGetProduct } from "@/hooks";
import React, { use, useEffect, useState } from "react";
import Loading from "../Common/Loading";
import ProductInfo from "./ProductInfo";
import RecommendList from "./RecommendList";
import useProductStore, {
  setSpecificProductStoreState,
} from "@/stores/useProductStore";
import CartPopup from "./CartPopup";

type Props = {
  id: string;
};

const ProductMain = ({ id }: Props) => {
  const _api = useGetProduct(id);
  const setSpecific = useProductStore(setSpecificProductStoreState);
  useEffect(() => {
    if (!_api?.data) return;
    setSpecific(_api?.data?.specificList[0]!);
  }, [_api?.isPending]);

  if (_api?.isLoading) return <Loading />;

  return (
    <div className="content-container flex flex-col content-center justify-between">
      <ProductInfo product={_api?.data!} />
      <RecommendList />
      <CartPopup />
    </div>
  );
};

export default ProductMain;
