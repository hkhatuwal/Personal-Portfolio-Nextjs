"use client"
import React, {createContext, useEffect, useState} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {portfolio} from "../../constants";

export const SmoothScrollContext = createContext({
    scroll: null,
    scrollToDiv:null
})

export const SmoothScrollProvider = ({children, options}) => {
    const [scroll, setScroll] = useState(null)


    useEffect(() => {
        if (!scroll) {
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

            ;(async () => {
                try {
                    const LocomotiveScroll = (await import('locomotive-scroll')).default

                    console.log(document.querySelector('#my-scroll'))
                    setScroll(
                        new LocomotiveScroll({
                            el: document.querySelector('#my-scroll') ?? undefined,
                            ...options,
                        })
                    )

                    gsap.set(".hero-top-details",{
                        opacity: 0,
                        transform: "translateX(-1000px)",
                    })
                    gsap.set(".hero-bottom-details",{
                        opacity: 0,
                        transform: "translateY(1000px)",
                    })

                    gsap.set(".hero-image",{
                        opacity: 0,
                        transform: "translateX(1000px)",
                    })


                    gsap.to(".hero-top-details", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        transform: "translate(0,0)",
                    });

                    gsap.to(".hero-bottom-details", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        transform: "translate(0,0)",
                    });

                    gsap.to(".hero-image", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        transform: "translate(0,0)",
                    });


                    gsap.to(".portfolio-section", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        transform: "translateY(0px)",
                        scrollTrigger: ".portfolio",
                    });


                    gsap.from(".skill", {
                        opacity: 1,
                        width: 0,
                        duration: .5,
                        stagger:.1,
                        scrub: 3,
                        scrollTrigger: ".skill",
                    });

                    portfolio.map((item,index)=>{
                        gsap.to(".portfolio-"+index, {
                            opacity: 1,
                            duration: .5,
                            scrub: 3,
                            stagger: .5,
                            transform: "translateY(0px)",
                            scrollTrigger:".portfolio-"+index,
                        });
                    })

                    if (window.location.hash) {
                        console.log(window.location.hash)
                        scrollToDiv(window.location.hash)
                    }

                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`)
                }
            })()
        }

        return () => {
            scroll && scroll.destroy()
        }
    }, [scroll])


    const scrollToDiv=(item) =>{
        console.log("Hello")
        gsap.to(window, {duration: .5, delay: .5, scrollTo: item, ease: 'Power1.easeInOut'})

    }

    return <SmoothScrollContext.Provider value={{scroll,scrollToDiv:scrollToDiv}}>
        {children}
    </SmoothScrollContext.Provider>
}


