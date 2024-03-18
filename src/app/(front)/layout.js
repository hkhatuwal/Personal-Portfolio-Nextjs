import React from 'react';
import {SmoothScrollProvider} from "@/context/SmoothScrollProvider";
import {Inter, Poppins} from 'next/font/google'
import Navbar from "../../components/front/Navbar";
import Footer from "../../components/common/Footer";
const inter = Poppins({subsets: ['latin'], weight: "400"})

export const metadata = {
    title: 'Devroox',
    description: 'Website and Mobile app developmentt',
    openGraph: {
        images: '/opengraph-image.png',
    },
}

export default function RootLayout({
                                       children,
                                   }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-bg container lg:px-20 m-auto `}>
        <SmoothScrollProvider>

            <Navbar/>
            <main  id="my-scroll">
                {children}

            </main>

        </SmoothScrollProvider>
        <Footer/>
        </body>
        </html>
    )
}
