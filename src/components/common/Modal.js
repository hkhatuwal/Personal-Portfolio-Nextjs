
"use client"
import React, {useContext, useEffect} from 'react';
import {modalContext, useModalProvider} from "../../context/ModalProvider";

const Modal = ({children,title}) => {

const {isVisible,show,hide}=useModalProvider()

    useEffect(function (){


        var backdrop=document.getElementById("backdrop")

        backdrop.addEventListener('click',function (e){
            if(!e.isTrusted){
                return;
            }
            var modal = document.getElementById('modal');
            var position = modal.getBoundingClientRect();
           if(e.clientX<position.left || e.clientX>position.right || e.clientY<position.top || e.clientY>position.bottom){
               console.log("Callled")
              hide()
           }
        })
    },[])
    return (
            <div id={'backdrop'}  className={`fixed w-screen h-screen bg-bg/50 z-[9999999] flex justify-center items-center top-0 left-0 ${!isVisible?"hidden":""}`}>

            <div id={'modal'} className={'p-5 bg-white rounded-lg w-full md:w-1/2 m-2 '}>

                <h1 className={'heading font-semibold text-dark/80'}>{title}</h1>
                <div className={'h-0.5 w-full bg-bg/10'}> </div>


                <div className={'content py-5'}>

                    {children}

                </div>

            </div>


        </div>
    );
};

export default Modal;