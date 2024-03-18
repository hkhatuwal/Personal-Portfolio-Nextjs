"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import {adminMenuItems} from "../../../constants";
import MenuItem from "./MenuItem.js";
import {usePathname} from "next/navigation";

const SideBar = () => {

    return (
        <nav className={'w-[250px] bg-[#fbf7f3] shadow h-screen'}>

            <div className="logo flex justify-center my-11">
                <Image  src={"/images/logo.png"}  width={150} height={150} alt={"/fdf"}/>
            </div>
            <ul className={'flex flex-col gap-2 links'}>

                {adminMenuItems.map((item)=><MenuItem Icon={item.icon} title={item.title} slug={item.slug} key={item.slug}/>)}



            </ul>
        </nav>
    );
};

export default SideBar;