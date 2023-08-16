"use client"
import React, {useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";
import {portfolio} from "../../../constants";
import PortfolioItem from "@/components/home/PortfolioItem";

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {

    useEffect(() => {
        gsap.to(".portfolio-section", {
            opacity: 1,
            duration: .5,
            scrub: 3,
            transform: "translateY(0px)",
            scrollTrigger: ".portfolio",
        });

    }, [])
    return (
        <div className={'h-screen portfolio-section opacity-0 translate-y-24 mt-10'}>

            <h4 className={'text-md lg:text-lg text-primary/75 text-center font-thin uppercase tracking-wider'}>Over 5+ years of
                experience</h4>
            <h1 className={'text-5xl lg:text-6xl text-center font-extrabold text-white/80 tracking-wider mt-5'}>My Portfolio</h1>

            <div className="portfolios w-full mt-10">
                {portfolio.map((item)=>PortfolioItem({...item}))}
            </div>


        </div>
    );
};

export default Portfolio;