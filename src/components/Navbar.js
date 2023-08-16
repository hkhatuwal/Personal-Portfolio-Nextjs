import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
            <nav className='flex justify-between items-center w-full px-3 '>
                <div className="logo"><Image src="/images/logo.png" width={100} height={100} alt=""/></div>

                    <ul className="hidden md:flex justify-between items-center gap-5 text-white ">
                        <Link href={"/"}>My Work</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Testimonials</Link>
                        <Link href={"/"}>Contact Us</Link>

                    </ul>
            </nav>
    );
};

export default Navbar;