"use client"
import React, {useContext} from 'react';
import Image from "next/image";
import {FiEdit2} from "react-icons/fi";
import {AiFillDelete} from "react-icons/ai";
import {modalContext} from "../../../context/ModalProvider";






const PortfolioCard = ({title, description,image,onEditClick}) => {

    return (
        <div className="portfolio relative shadow sm:w-full md:w-4/12 lg:w-2/12  max-h-82  rounded p-5 flex flex-col">







            <Image src={image} className={'w-full h-[150px] object-cover'} width={1000} height={1000} alt={"ai"}/>

            <h2 className={'text-dark font-semibold mt-3 '}>{title}</h2>
            <p className={'text-dark  mt-3 text-overflow text-overflow-line4 '} >
                {description}</p>


           <div className={'flex text-xl gap-3 absolute bottom-0 right-0 m-3 '}>
               <FiEdit2 className={'text-blue-500'} onClick={onEditClick}/>

               <AiFillDelete className={'text-red-500'}/>
           </div>

        </div>

    );
};

export default PortfolioCard;