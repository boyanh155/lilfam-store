import React from "react";
import { whatshotData } from "./dummyData/whatshot";
import Image from "next/image";
import Title from "./common/Title";
import { useTranslations } from "next-intl";

type Props = {};

const News = (props: Props) => {
  const t = useTranslations('Dictionary')
  return (
    <div className="flex flex-col content-container pt-14 ">
      {/* <div className="w-full md:text-start text-center pb-10 pt-16">
        <p className="text-2xl font-bold uppercase text-black">
         
        </p>
      </div> */}
      <Title title={t('whats_hot')} />

      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {whatshotData.map((v, i) => (
          <div key={i} className=" col-span-1 landing_card">
            <div className="w-full h-72 img_wrapper  relative">
              <Image src={v.img} alt="Card img " />
              <p
                className='text-xs text-white py-2 px-6 border-white border
                         transition-all
                          hover:opacity-40
                        hover:cursor-pointer
                         rounded-full absolute bottom-3 right-5
                          after:content-[""]
                          after:block
                          after:absolute
                          after:right-4
                          after:top-3
                          after:transition-all
                      
                       after:h-2
                       after:w-2
                        after:hover:translate-x-1
                          after:border-t 
                          after:border-r
                          after:rotate-45
                           
                         '
              >
                See more
              </p>
            </div>
            <div className="pt-0 pb-7">
              <p className="card-title text-base font-medium mt-4 mb-0">
                {v.title}
              </p>
              <p className=" text-xs tracking-wide">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
