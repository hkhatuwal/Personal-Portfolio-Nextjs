import React from 'react';
import Image from "next/image";
import {useModalProvider} from "../../../context/ModalProvider";
import Modal from "../../common/Modal";

const PortfolioItem = ({date,title,subtitle,desc,image,index}) => {

    return (
        <div className={`portfolio portfolio-${index}  w-full card p-3 lg:p-8 flex flex-col lg:flex-row  items-center translate-y-24`} key={title}>

            <div className={'w-full h-[250px] overflow-hidden rounded-lg  lg:w-[300px] lg:h-[220px] relative '}>
                <a href={image}>
                    <Image  src={image} className={'rounded-lg overflow-hidden object-contain bg-portfolio_image_bg w-full h-full hover:scale-110  transition-all duration-300 cursor-pointer'} height={1280} width={759}
                            alt={"portfolio"}/>
                </a>
            </div>
            <div className={'flex-1 p-4 flex flex-col gap-5 items-start'}>

                <h4 className={'bg-gray-500 rounded-full p-2 text-white/80 '}>{date}</h4>
                <h2 className={'text-3xl text-[#c4cfde] '}>{title}</h2>
                <h3 className={'text-xl text-[#c4cfde]  '}>{subtitle}</h3>
                <h3 className={'text-xl text-[#878e99]'}>{desc}</h3>

            </div>
            <a className={'btn-action text-primary'} href={"https://wa.me/+918607779869"}  >CONTACT - ME</a>
        </div>

    );
};

export default PortfolioItem;