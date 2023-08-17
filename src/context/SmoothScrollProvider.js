"use client"
import React, {createContext, useEffect, useState} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const SmoothScrollContext = createContext({
    scroll: null,
})
gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollProvider = ({children, options}) => {
    const [scroll, setScroll] = useState(null)

    useEffect(() => {
        if (!scroll) {
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


                    gsap.to(".portfolio-section", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        transform: "translateY(0px)",
                        scrollTrigger: ".portfolio",
                    });

                    gsap.to(".portfolio", {
                        opacity: 1,
                        duration: .5,
                        scrub: 3,
                        stagger: .5,
                        transform: "translateY(0px)",
                        scrollTrigger: ".portfolio",
                    });


                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`)
                }
            })()
        }

        return () => {
            scroll && scroll.destroy()
        }
    }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

    return <SmoothScrollContext.Provider value={{scroll}}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
