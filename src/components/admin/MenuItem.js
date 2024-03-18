"use client"
import React, {useEffect} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const MenuItem = ({Icon,title,slug}) => {
    const pathname=usePathname()
useEffect(()=>{
    console.log(pathname)
},[pathname])

    return (
        <li className={`${slug===pathname?'active':''} relative mx-2 rounded flex p-2 flex-row justify-start gap-3 items-center transition-all`}>
            <Icon size={25}/>
            <Link className={'text-center text-dark capitalize font-semibold '} href={slug}>{title}</Link></li>
    );
};

export default MenuItem;