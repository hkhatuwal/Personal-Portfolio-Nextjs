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


/** Optional `screenshots` array per project — paths under public/images/portfolio */
export const portfolio =
    [
        {
            slug: "adlef-group",
            title: "Adlef Group",
            date: "2024 - Current",
            desc: "A modern fintech platform built for secure OTC trading, digital asset management, and NFT purchases. Developed with Laravel, Vue.js, and MySQL, the platform provides real-time portfolio tracking, currency exchange, asset transfers, and enterprise-grade transaction management through a clean and scalable architecture.",
            subtitle: "OTC Trading & NFT Marketplace · Web · Laravel, Vue.js",
            category: "Laravel",
            image: "/images/portfolio/adlefportal/1.png",
            screenshots: [
                "/images/portfolio/adlefportal/1.png",
                "/images/portfolio/adlefportal/asset-transfer.png",
                "/images/portfolio/adlefportal/dashboard.png",
            ],
            demoUrl: "https://adlefgroup.com",
        },
        {
            slug: "inventory-management",
            title: "Inventory Management",
            date: "2023 - Current",
            desc: "Inventory management system is for razererp to manage their inventory",
            subtitle: "ERP Stock Control · Desktop · Flutter",
            category:'Flutter',
            image: "/images/portfolio/inventory.png",
        },
        {
            slug: "senangakaun",
            title: "SenangAkaun",
            date: "2024",
            desc: "Accounting system for malaysia based company in collaboration with malaysian government",
            subtitle: "Accounting Platform · Web · Laravel, PHP",
            category:'Laravel',
            image: "/images/portfolio/senangakaun.png",
            screenshots: [
                "/images/portfolio/senangakaun.png",
                "/images/portfolio/senangakaun.gif",
            ],
            demoUrl: "https://senangakaun.com",
        },
        {
            slug: "ai-receipt-processor",
            title: "AI Receipt Processor",
            date: "2025 - 2026",
            desc: "AI-powered receipt processor add-on for SenangAkaun that reads receipt images, extracts expense data automatically, and posts it directly into the existing accounting system.",
            subtitle: "Expense Automation · AI · Next.js, API",
            category:'Ai',
            image: "/images/portfolio/ai_processor.png",
            demoUrl: "https://panel.senangakaun.com/receipt/upload",
        },
        {
            slug: "senangakaun-airecon",
            title: "SenangAkaun AI Recon",
            date: "2025 - 2026",
            desc: "An AI-powered reconciliation addon for Senangakaun.com that automatically parses and reconciles bank statements into the accounting system. Designed to reduce manual accounting work, improve accuracy, and streamline financial operations with intelligent transaction matching.",
            subtitle: "Bank Reconciliation · Web · Laravel, AI",
            category: "Ai",
            image: "/images/portfolio/senangakaun-airecon.png",
            screenshots: [
                "/images/portfolio/senangakaun-airecon.png",
                "/images/portfolio/senangakaun/reconai.png",
            ],
            demoUrl: "https://senangakaun.com",
        },
        {
            slug: "trackit",
            title: "Trackit",
            date: "2022 - Current",
            desc: "Mobile App for tracking system using flutter ",
            subtitle: "Vehicle Tracking · Mobile · Flutter",
            category:'Flutter',

            image: "/images/portfolio/trackit.gif",
        },
        {
            slug: "60-words-news",
            title: "60 Words News",
            date: "2023 - Current",
            desc: "Local News app that describes the news in just 60 words like inshorts . Which shows you all news nearby to you ",
            subtitle: "Local News Reader · Mobile · Flutter",
            category:'Flutter',
            image: "/images/portfolio/news_app.png",
            demoUrl: "https://play.google.com/store/apps/dev?id=6460456971372591172",
        },
        {
            slug: "nearby-news-admin",
            title: "Nearby News Admin",
            date: "2023 - Current",
            desc: "Local News app admin panel to controll all the data along with users with features link blocking,posting,managing users and much more. ",
            subtitle: "Content Management · Web · Laravel",
            category:'Laravel',

            image: "/images/portfolio/humlocal-admin.png",
        },
       {
        slug: "pioneer-cares",
        title: "Pioneer Cares",
        date: "2022 - Previous",
        desc: "App for cable technicians to reward on purchase of the table with coupons",
        subtitle: "Technician Rewards · Mobile · Flutter",
           category:'Flutter',

        image: "/images/portfolio/pioneer.png",
    }, {
        slug: "lmprofit-desktop",
        title: "LMProfit Desktop",
        date: "2022 - Previous",
        desc: "Pos system with invoice and silent printing for Windows/Mac",
        subtitle: "Point of Sale · Desktop · Electron, Vue.js",
        category:'Javascript',

        image: "/images/portfolio/lmprofit.png",
    }, {
        slug: "lmprofit-web",
        title: "LMProfit Web",
        date: "2022 - Previous",
        desc: "Pos system with invoice and silent printing for web",
        subtitle: "Point of Sale · Web · Laravel",
        category:'Laravel',

        image: "/images/portfolio/lmprofit_web.png",
    }, {
        slug: "cricket-net",
        title: "Cricket Net",
        date: "2022 - Previous",
        desc: "Cricket Prediction Mobile app with affiliate and news section",
        subtitle: "Cricket Predictions · Mobile · Java, Kotlin",
        category:'Java/Kotlin',

        image: "/images/portfolio/cricnet.png",
    },
        {
            slug: "movies-app",
            title: "Movies App",
            date: "2020 - 2021 ",
            desc: "Movies app for playing youtube videos fetch from custom laravel backend",
            subtitle: "Video Streaming · Mobile · Java, Kotlin",
            category:'Java/Kotlin',

            image: "/images/portfolio/movies_app.png",
        },
        {
            slug: "nft-landing",
            title: "NFT Landing Page",
            date: "2023 - Current",
            desc: "Nft landing page for a new nft startup",
            subtitle: "Startup Marketing · Web · Next.js, Tailwind",
            category:'Javascript',
            image: "/images/portfolio/nft.png",
        },

    ]

export  const categories=[
    'All',
    'Flutter','Java/Kotlin','Laravel','Javascript','Ai'
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