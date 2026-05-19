"use client";

import { portfolio, categories } from "../../../../constants";
import Divider from "src/components/common/Divider";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slugify } from "@/lib/portfolio";

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTabRef, setSelectedTabRef] = useState(null);
    const firstTabRef = useRef(null);
    const categoriesContainer = useRef(null);

    useEffect(() => {
        if (firstTabRef.current) {
            setSelectedTabRef(firstTabRef.current);
        }
    }, []);

    const backgroundLeft = useCallback(() => {
        if (selectedTabRef && categoriesContainer.current) {
            return (
                selectedTabRef.getBoundingClientRect().x -
                categoriesContainer.current.getBoundingClientRect().x +
                2
            );
        }
        return 0;
    }, [selectedTabRef]);

    const backgroundTop = useCallback(() => {
        if (selectedTabRef && categoriesContainer.current) {
            return (
                selectedTabRef.getBoundingClientRect().y -
                categoriesContainer.current.getBoundingClientRect().y
            );
        }
        return 0;
    }, [selectedTabRef]);

    const orderedCategories = useMemo(() => {
        const others = categories.filter((c) => c !== "All" && c !== "Ai");
        return ["All", "Ai", ...others];
    }, []);

    const filteredPortfolio = portfolio.filter(
        (item) => item.category === selectedCategory || selectedCategory === "All"
    );

    return (
        <div className="portfolio-section mt-16" id="portfolio">
            <h4 className="text-md lg:text-lg text-primary/75 text-center font-thin uppercase tracking-[0.25em]">
                Over 5+ years of experience
            </h4>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold text-white/90 tracking-wide mt-4">
                My Portfolio
            </h1>
            <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto px-4">
                A curated selection of products and applications across mobile, web, and desktop.
            </p>

            <div
                className="categories flex flex-wrap justify-center relative mt-8 gap-2.5 bg-black/20 border border-white/10 rounded-2xl p-2 w-fit mx-auto"
                ref={categoriesContainer}
            >
                {selectedTabRef && (
                    <TabHighlight
                        selectedTabRef={selectedTabRef}
                        backgroundLeft={backgroundLeft}
                        backgroundTop={backgroundTop}
                    />
                )}
                {orderedCategories.map((item, index) => (
                    <div className="relative" key={index}>
                        <button
                            ref={index === 0 ? firstTabRef : null}
                            onClick={(e) => {
                                setSelectedCategory(item);
                                setSelectedTabRef(e.currentTarget);
                            }}
                            className={`rounded-xl px-5 py-2.5 text-sm sm:text-base text-white z-50 relative transition-colors duration-200 ${
                                item === selectedCategory
                                    ? "border-transparent"
                                    : item === "Ai"
                                    ? "text-primary font-semibold"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <div className="portfolios w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPortfolio.map((item, index) => (
                    <PortfolioCard key={`${item.title}-${index}`} item={item} />
                ))}
            </div>

            {filteredPortfolio.length === 0 && (
                <div className="mt-10 text-center text-white/60 border border-dashed border-white/20 rounded-xl p-6">
                    No portfolio items found in this category yet.
                </div>
            )}

            <Divider />
        </div>
    );
};

function TabHighlight({ selectedTabRef, backgroundLeft, backgroundTop }) {
    return (
        <div
            className="absolute bg-primary z-10 rounded-xl transition-all duration-200"
            style={{
                width: selectedTabRef.clientWidth,
                height: selectedTabRef.clientHeight,
                left: backgroundLeft(),
                top: backgroundTop(),
            }}
        />
    );
}

function PortfolioCard({ item }) {
    const slug = item.slug || slugify(item.title);

    return (
        <article className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] hover:border-primary/60 transition-all duration-300 hover:-translate-y-1">
            <Link
                href={`/portfolio/${slug}`}
                className="block h-80 sm:h-72 relative overflow-hidden"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
            </Link>
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-wider text-primary/90 bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
                        {item.category}
                    </span>
                    <span className="text-xs text-white/60">{item.date}</span>
                </div>
                <h3 className="text-xl text-white font-semibold">
                    <Link
                        href={`/portfolio/${slug}`}
                        className="hover:text-primary transition-colors"
                    >
                        {item.title}
                    </Link>
                </h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
                <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                    {item.desc}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                    <Link
                        href={`/portfolio/${slug}`}
                        className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
                    >
                        View Details
                    </Link>
                    {item.demoUrl && (
                        <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Live Demo
                        </a>
                    )}
                    <a
                        href="https://wa.me/+918607779869"
                        className="inline-flex items-center justify-center rounded-lg bg-primary/15 hover:bg-primary/25 border border-primary/40 text-primary px-4 py-2 text-sm font-medium transition-colors duration-200"
                    >
                        Discuss Project
                    </a>
                </div>
            </div>
        </article>
    );
}

export default Portfolio;
