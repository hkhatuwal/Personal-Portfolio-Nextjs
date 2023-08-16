import React from 'react';
import Image from "next/image";

const PortfolioItem = ({date,title,subtitle,desc,image}) => {
    return (
        <div className={'portfolio w-full card p-3 lg:p-8 flex flex-col lg:flex-row  items-center'} key={title}>

            <div className={'w-full h-[250px] overflow-hidden   lg:w-[300px] lg:h-[220px] relative'}>
                <Image src={image} className={'rounded-lg absolute]'} fill={true}
                       alt={"portfolio"}/>
            </div>
            <div className={'flex-1 p-4 flex flex-col gap-5 items-start'}>

                <h4 className={'bg-gray-500 rounded-full p-2 text-white/80 '}>{date}</h4>
                <h2 className={'text-3xl text-[#c4cfde] '}>{title}</h2>
                <h3 className={'text-xl text-[#c4cfde]  '}>{subtitle}</h3>
                <h3 className={'text-xl text-[#878e99]'}>{desc}</h3>

            </div>
            <button className={'btn-action text-primary'}>CONTACT - ME</button>
        </div>

    );
};

export default PortfolioItem;