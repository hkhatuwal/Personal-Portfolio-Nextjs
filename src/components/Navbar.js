import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
            <nav className='flex justify-between items-center w-full px-3 '>
                <div className="logo"><Image src="/images/logo.png" width={100} height={100} alt=""/></div>
                    <ul className="hidden md:flex justify-between items-center gap-10 text-white ">
                        <Link href={"/"} className={'hover'}>My Work</Link>
                        <Link href={"/"} className={'hover'}>About</Link>
                        <Link href={"/#skils"} className={'hover'}>Skills</Link>
                        <Link href={"/"} className={'hover'}>Contact Us</Link>

                    </ul>
            </nav>
    );
};

export default Navbar;