"use client"
import {createContext, useContext, useState} from "react";


export  const modalContext=createContext({isVisible:false })





export const ModalProvider=({children})=>{

    const [isVisible,setVisible]=useState(false)

    console.log("Called from provider");


    function  hide(){
        setVisible(false)
    }
    function  show(){
        setVisible(true)

    }
    return <modalContext.Provider value={{isVisible: isVisible,hide:hide,show:show}}>
        {children}
    </modalContext.Provider>
}



export  const  useModalProvider=()=>useContext(modalContext)