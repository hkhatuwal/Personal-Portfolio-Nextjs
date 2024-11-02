"use client"

import React, {useContext, useRef, useState} from 'react';
import {portfolio} from "../../../../constants";
import PortfolioCard from "./PortfolioCard";
import Modal from "../../common/Modal";
import { useModalProvider} from "../../../context/ModalProvider";

import ImagePicker from "../../common/ImagePicker";

const PortFolioList = () => {
    const [selectedPortFolio, setSelectedPortfolio] = useState({
        title:"",
        description:"",
        image:""
    })
    const {show,hide} = useModalProvider()

    function onEditClick(item) {
        setSelectedPortfolio(item)
        console.log(selectedPortFolio)
        show()
    }



    return (
        <div className="portfolios flex flex-row w-full gap-2 flex-wrap">
            <Modal title={"Edit Portfolio"}>
                <div className={'flex flex-col gap-2'}>
                    <div>
                        <label className={'text-bg font-semibold'}>Title</label>
                        <input type="text"
                               onChange={(value)=>{
                                   setSelectedPortfolio({...selectedPortFolio, title: value})
                               }}
                               className={'border-2 py-2 px-3 rounded-lg w-full focus:border-blue-400 focus:outline-0 transition-all duration-300'}
                               value={selectedPortFolio.title}/>

                    </div>
                    <div>
                        <label className={'text-bg font-semibold'}>Description</label>
                        <textarea
                           
                            className={'border-2 py-2 px-3 rounded-lg w-full h-40 focus:border-blue-400 focus:outline-0 transition-all duration-300'} value={selectedPortFolio.desc}    >

                        </textarea>

                    </div>

                    <div className={'flex flex-col'}>
                        <label className={'text-bg font-semibold'}>Thumbnail</label>


                        <ImagePicker image={selectedPortFolio.image} onImageDelete={()=>setSelectedPortfolio({...selectedPortFolio,image:null})}/>
                    </div>


                    <button className={'bg-blue-400 p-2 text-white font-semibold rounded '}>Submit</button>
                </div>

            </Modal>


            {portfolio.map((item) => <PortfolioCard image={item.image} title={item.title} description={item.desc} key={item.title}
                                                    onEditClick={() => onEditClick(item)}/>)}

        </div>
    );
};

export default PortFolioList;