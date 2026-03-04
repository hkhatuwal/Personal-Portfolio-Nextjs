import {IoDocumentTextOutline, IoLocationSharp, IoMailOutline} from "react-icons/io5";
import {BsFillGrid3X3GapFill, BsGearFill} from "react-icons/bs";
import {AiOutlineBarChart} from "react-icons/ai";


export const heroItems = [{
    title: "Full stack developer", Icon: <IoDocumentTextOutline/>
}, {
    title: "contact@devroox.com", Icon: <IoMailOutline/>
}, {
    title: "Alwar,Rajasthan India", Icon: <IoLocationSharp/>
}]


export const portfolio =
    [
        {
            title: "Inventory Management System",
            date: "2023 - Current",
            desc: "Inventory management system is for razererp to manage their inventory",
            subtitle: "Windows/Mac - Flutter",
            category:'Flutter',
            image: "/images/portfolio/inventory.png",
        },
        {
            title: "Fully Featured Accounts System ",
            date: "2024",
            desc: "Accounting system for malaysia based company in collaboration with malaysian government",
            subtitle: "Web-Laravel   - Php ",
            category:'Laravel',
            image: "/images/portfolio/senangakaun.gif",
        },
        {
            title: "Trackit Vehicle Tracking System",
            date: "2022 - Current",
            desc: "Mobile App for tracking system using flutter ",
            subtitle: "Android/Ios  - Flutter",
            category:'Flutter',

            image: "/images/portfolio/trackit.gif",
        },
        {
            title: "60 Words News App",
            date: "2023 - Current",
            desc: "Local News app that describes the news in just 60 words like inshorts . Which shows you all news nearby to you ",
            subtitle: "Android/Ios  - Flutter",
            category:'Flutter',

            image: "/images/portfolio/news_app.gif",
        },
        {
            title: "Nearby News App Admin Panel",
            date: "2023 - Current",
            desc: "Local News app admin panel to controll all the data along with users with features link blocking,posting,managing users and much more. ",
            subtitle: "Web-Laravel  - Php",
            category:'Laravel',

            image: "/images/portfolio/humlocal-admin.png",
        },
       {
        title: "Pioneer Cares",
        date: "2022 - Previous",
        desc: "App for cable technicians to reward on purchase of the table with coupons",
        subtitle: "Mobile | Tablet - Flutter Mobile App",
           category:'Flutter',

        image: "/images/portfolio/pioneer.png",
    }, {
        title: "Lmprofit Desktop Pos System ",
        date: "2022 - Previous",
        desc: "Pos system with invoice and silent printing for Windows/Mac",
        subtitle: "Windows/Mac - Electron,Vue Js ",
        category:'Javascript',

        image: "/images/portfolio/lmprofit.png",
    }, {
        title: "Lmprofit Web Pos System ",
        date: "2022 - Previous",
        desc: "Pos system with invoice and silent printing for web",
        subtitle: "Web - Laravel ",
        category:'Laravel',

        image: "/images/portfolio/lmprofit_web.png",
    }, {
        title: "Cricket Net",
        date: "2022 - Previous",
        desc: "Cricket Prediction Mobile app with affiliate and news section",
        subtitle: "Android - Java,Kotlin ",
        category:'Java/Kotlin',

        image: "/images/portfolio/cricnet.png",
    },
        {
            title: "Movies App | Youtube similar",
            date: "2020 - 2021 ",
            desc: "Movies app for playing youtube videos fetch from custom laravel backend",
            subtitle: "Android - Java,Kotlin ",
            category:'Java/Kotlin',

            image: "/images/portfolio/movies_app.png",
        },
        {
            title: "NFT Landing Page ",
            date: "2023 - Current",
            desc: "Nft landing page for a new nft startup",
            subtitle: "Web/Mobile  - Next Js | Tailwind css",
            category:'Javascript',
            image: "/images/portfolio/nft.png",
        },

    ]

export  const categories=[
    'All',
    'Flutter','Java/Kotlin','Laravel','Javascript'
]

export const skills = [
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "Flutter", percent: 95
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "Next Js", percent: 94
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "React Js", percent: 97
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "Java", percent: 98
    }

    ,
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "Kotlin", percent: 95
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "PHP", percent: 96
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "LARAVEL", percent: 95
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "Dart", percent: 97
    },

    {
        fromColor: '#ef287e', toColor: '#c91903', title: "CSS", percent: 91
    },
    {
        fromColor: '#ef287e', toColor: '#c91903', title: "HTML", percent: 99
    },
]


export const services = [
    {
        title: "Web Development",
        description: "Custom web applications using React, Next.js, and modern frameworks",
        amount: 500,
        icon: "🌐"
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile apps using Flutter for iOS and Android",
        amount: 800,
        icon: "📱"
    },
    {
        title: "Backend Development",
        description: "Robust backend systems using Laravel, PHP, and Node.js",
        amount: 600,
        icon: "⚙️"
    },
    {
        title: "Full Stack Development",
        description: "Complete end-to-end solutions from frontend to backend",
        amount: 1200,
        icon: "🚀"
    },
    {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces with modern design principles",
        amount: 300,
        icon: "🎨"
    },
    {
        title: "API Development",
        description: "RESTful APIs and GraphQL endpoints for seamless integration",
        amount: 400,
        icon: "🔗"
    }
]

export const adminMenuItems = [
    {
        title: "Dashboard",
        icon: AiOutlineBarChart,
        slug: '/admin/dashboard'
    },

    {
        title: "Portfolio",
        icon: BsFillGrid3X3GapFill,
        slug: '/admin/portfolio'

    },
    {
        title: "Settings",
        icon: BsGearFill,
        slug: '/admin/settings'

    }

]