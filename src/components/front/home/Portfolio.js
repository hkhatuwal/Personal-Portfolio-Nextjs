"use client";

import { portfolio, categories } from "../../../../constants";
import PortfolioItem from "src/components/front/home/PortfolioItem";
import Divider from "src/components/common/Divider";
import { useCallback, useEffect, useRef, useState } from "react";

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTabRef, setSelectedTabRef] = useState(null);
    const firstTabRef = useRef(null);
    const categoriesContainer = useRef(null);

    // Set the default selected tab ref to the first category button on mount
    useEffect(() => {
        if (firstTabRef.current) {
            setSelectedTabRef(firstTabRef.current);
        }
    }, []);

    // Calculate the left position for the background highlight of selected tab
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

    return (
        <div className="portfolio-section opacity-0 translate-y-24 mt-10" id="portfolio">
            <h4 className="text-md lg:text-lg text-primary/75 text-center font-thin uppercase tracking-wider">
                Over 5+ years of experience
            </h4>
            <h1 className="text-5xl lg:text-6xl text-center font-extrabold text-white/80 tracking-wider mt-5">
                My Portfolio
            </h1>

            <div className="categories flex relative mt-6 gap-2" ref={categoriesContainer}>
                {selectedTabRef && (
                    <div
                        className="absolute bg-primary z-10 rounded-lg p-4 transition-all duration-200 h-full"
                        style={{
                            width: selectedTabRef.clientWidth,
                            left: backgroundLeft(),
                        }}
                    />
                )}
                {categories.map((item, index) => (
                    <div className="relative" key={index}>
                        <button
                            ref={index === 0 ? firstTabRef : null}
                            onClick={(e) => {
                                setSelectedCategory(item);
                                setSelectedTabRef(e.currentTarget);
                            }}
                            className={`border-2 rounded-lg p-4 text-white z-50 relative ${
                                item === selectedCategory ? "border-transparent" : "border-black/40"
                            }`}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <div className="portfolios w-full mt-6">
                {portfolio
                    .filter((item) => item.category === selectedCategory || selectedCategory === "All")
                    .map((item, index) => (
                        <PortfolioItem key={index} {...item} index={index} />
                    ))}
            </div>

            <Divider />
        </div>
    );
};

export default Portfolio;
