"use client";

import { services } from "../../../../constants";
import ServiceItem from "./ServiceItem";
import Divider from "../../common/Divider";

const Services = () => {
    return (
        <div className="services-section mt-10" id="services">
            <h4 className="text-md lg:text-lg text-primary/75 text-center font-thin uppercase tracking-wider">
                Professional Services
            </h4>
            <h1 className="text-5xl lg:text-6xl text-center font-extrabold text-white/80 tracking-wider mt-5">
                My Services
            </h1>
            <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                Choose from a range of professional development services tailored to your needs
            </p>

            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {services.map((service, index) => (
                    <ServiceItem key={index} {...service} index={index} />
                ))}
            </div>

            <Divider />
        </div>
    );
};

export default Services;
