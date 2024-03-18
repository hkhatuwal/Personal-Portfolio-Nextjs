import './globals.css'
import React from "react";
import {ModalProvider} from "../context/ModalProvider";


export const metadata = {
    title: 'Fleecoder',
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
            {children}

        </html>
    )
}
