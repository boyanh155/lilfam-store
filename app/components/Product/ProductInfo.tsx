import React, { useEffect, useState } from "react";
import SideImages from "./ProductInfo/SideImages";
import MainImage from "./ProductInfo/MainImage";
import Information from "./ProductInfo/Information";
import useProductStore, {
  selectSpecificProductStoreState,
} from "@/stores/useProductStore";

type Props = {
  product: ProductResponseType;
};

const ProductInfo = ({ product }: Props) => {
  const specific = useProductStore(selectSpecificProductStoreState);

  const [mainImageSrc, setMainImageSrc] = useState<{
    type: "img" | "video";
    src: string;
  }>({
    type: "img",
    src: "",
  });
  useEffect(() => {
    setMainImageSrc({
      type: "img",
      src: specific?.images[0] || "",
    });
  }, [specific]);
  return (
    <div className="grid grid-cols-2 h-full mt-16 gap-20 px-22">
      <div>
        <div className="grid grid-cols-8 sticky top-16">
          <div className="h-[640px]">
            <SideImages product={product} setMainImageSrc={setMainImageSrc} />
          </div>
          <div className="col-start-2 col-end-9 h-[640px] w-[500px]">
            <MainImage mainImageSrc={mainImageSrc} />
          </div>
        </div>
      </div>
      <div className="pr-28">
        <Information product={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
