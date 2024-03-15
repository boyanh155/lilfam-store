import useProductStore, {
  selectSpecificProductStoreState,
} from "@/stores/useProductStore";
import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductResponseType;
  setMainImageSrc: React.Dispatch<
    React.SetStateAction<{
      type: "img" | "video";
      src: string;
    }>
  >;
};

const SideImages = ({ product, setMainImageSrc }: Props) => {
  const specific = useProductStore(selectSpecificProductStoreState);
  return (
    <div className=" h-full  relative">
      <div className=" absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent opacity-90 z-10"></div>
      <ul className="no-scrollbar flex flex-col gap-2 overflow-y-scroll  h-full">
        {product.specificList
          .find((v) => v.specificId === specific?.specificId)
          ?.images.map((v, id) => {
            return (
              <div key={id} className="pr-4 ">
                {v.endsWith(".mp4") || v.endsWith(".mov") ? (
                  <div
                    className="w-16 h-16 rounded-md relative hover:opacity-60 cursor-pointer transition-all"
                    onClick={() =>
                      setMainImageSrc({
                        src: v,
                        type: "video",
                      })
                    }
                  >
                    <img
                      className="w-full h-full"
                      src={v.replace(".mp4", ".jpg").replace(".mov", ".jpg")}
                      alt="image"
                    />
                    <PlayArrow className="absolute bottom-0 left-0 text-white" />
                  </div>
                ) : (
                  <div
                    className="w-16 h-16 rounded-md hover:opacity-60 cursor-pointer transition-all"
                    onClick={() => setMainImageSrc({ src: v, type: "img" })}
                  >
                    <img className="w-full h-full" src={v} alt="image" />
                  </div>
                )}
              </div>
            );
          })}
      </ul>
      <div className=" absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-white opacity-90 z-10"></div>
    </div>
  );
};

export default SideImages;
