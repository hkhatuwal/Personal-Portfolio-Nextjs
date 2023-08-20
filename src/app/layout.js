import './globals.css'
import {Inter, Poppins} from 'next/font/google'
import Navbar from "../components/Navbar";
import {SmoothScrollProvider} from "@/context/SmoothScrollProvider";
import Footer from "../components/common/Footer";
import Head from "next/head";

const inter = Poppins({subsets: ['latin'], weight: "400"})

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
        <Head>
            <title>Cool Title</title>
            <meta name="description" content="Checkout our cool page" key="desc" />
            <meta property="og:title" content="Social Title for Cool Page" />
            <meta
                property="og:description"
                content="And a social description for our cool page"
            />
            <meta
                property="og:image"
                content="/images/test.png"
            />
        </Head>
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
