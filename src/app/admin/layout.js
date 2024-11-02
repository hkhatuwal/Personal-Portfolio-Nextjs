import SideBar from "../../components/admin/SideBar";
import React from "react";
import Modal from "../../components/common/Modal";
import {ModalProvider} from "../../context/ModalProvider";




export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }) {
    return (<body className={'bg-white/90'}>

    <main className={'flex admin'}>
        <SideBar/>


        <div className={'p-3 w-full '}>
            <ModalProvider>
                {children}

            </ModalProvider>
        </div>

    </main>

    </body>)
}