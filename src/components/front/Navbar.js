"use client"
import React, {useContext} from 'react';
import Image from "next/image";
import Link from "next/link";
import {SmoothScrollContext} from "../../context/SmoothScrollProvider";
import {useRouter} from 'next/navigation'

const Navbar = () => {

    const {scrollToDiv} = useContext(SmoothScrollContext)
    const router = useRouter()

    function scrollToItem(event) {
        event.preventDefault()
        return true
    }

    return (
        <nav className='flex justify-between items-center w-full px-3 '>
            <div className="logo"><Image src="/images/logo.png" width={100} height={100} alt=""/></div>
            <ul className="hidden md:flex justify-between items-center gap-10 text-white ">
                <Link href={"#about"} onClick={() => scrollToItem(event)} className={'hover'}>About</Link>
                <Link href={"#portfolio"} onClick={() => scrollToItem(event)} className={'hover'}>Portfolio</Link>
                <Link href={"#services"} onClick={() => scrollToItem(event)} className={'hover'}>Services</Link>
                <Link href={"#skils"} onClick={() => scrollToItem(event)} className={'hover'}>Skills</Link>
                <a href={"mailto:contact@devroox.com"} className={'hover'}>Contact Us</a>

            </ul>
        </nav>
    );
};

export default Navbar;