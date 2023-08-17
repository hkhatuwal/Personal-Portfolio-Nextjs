import React from 'react';
import Image from "next/image";
import {FaSquareFacebook} from "react-icons/fa6";
import {BsLinkedin} from "react-icons/bs";
import {AiFillTwitterSquare} from "react-icons/ai";
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi";
import {DiGithubAlt} from "react-icons/di";
import Link from "next/link";
import Divider from "./Divider";

const Footer = () => {
    return (
      <div>
          <div className={' flex flex-col md:flex-row gap-8 justify-between'}>
              <div>
                  <Image src={"/images/profile.jpg"} className={'h-20 w-20 object-cover rounded-full bg-white/20 p-1'} alt={"profile"}
                         width={100} height={100}/>

                  <ul className={'social-media flex  mt-6 gap-x-2'}>
                      <li><BiLogoFacebook className={'main-shadow hover p-1 text-white/70 bg-bg2 rounded cursor-pointer'} size={50} /></li>

                      <li><DiGithubAlt className={'main-shadow hover p-1 text-white/70 bg-bg2 rounded cursor-pointer'} size={50} /></li>
                      <li><BiLogoLinkedin className={'main-shadow hover p-1 text-white/70 bg-bg2 rounded cursor-pointer'} size={50} /></li>
                  </ul>

              </div>


              <div className={'md:text-right'}>
                  <h1 className={'text-lg text-primary uppercase'}>Quick Links</h1>

                  <ul className={'flex gap-4 flex-col mt-6'}>
                      <li className={'text-white/60'}><Link href={'/'}>Portfolio</Link></li>
                      <li className={'text-white/60'}><Link href={'/'}>Contact Us</Link></li>
                      <li className={'text-white/60'}><Link href={'/'}>Testimonial</Link></li>

                  </ul>
              </div>

          </div>
          <Divider/>
      </div>
    );
};

export default Footer;