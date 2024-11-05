import { useState, useEffect } from 'react';
import {categories} from "../../../../constants";

export default function CategoryButtons() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [prevIndex, setPrevIndex] = useState(0);

    const handleClick = (item, index) => {
        setPrevIndex(categories.indexOf(selectedCategory));
        setSelectedCategory(item);
    };

    return (
        <div className="flex gap-4">
            {categories.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(item, index)}
                    className={`border-2 rounded-lg border-black/40 p-4 text-white relative overflow-hidden`}
                    style={{
                        backgroundColor: item === selectedCategory ? "yellow" : "transparent",
                        transition: "background-color 0.3s ease-in-out",
                    }}
                >
          <span
              className={`absolute inset-0 bg-yellow-500 ${
                  item === selectedCategory ? "animate-slide" : ""
              }`}
              style={{
                  left: `${Math.min(prevIndex, index) * 100}%`,
                  right: `${(categories.length - 1 - Math.max(prevIndex, index)) * 100}%`,
              }}
          ></span>
                    {item}
                </button>
            ))}

            <style jsx>{`
        .animate-slide {
          animation: slide 0.3s forwards ease-in-out;
        }
        @keyframes slide {
          from {
            left: 0;
          }
          to {
            left: 100%;
          }
        }
      `}</style>
        </div>
    );
}
