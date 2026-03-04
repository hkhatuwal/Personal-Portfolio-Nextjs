"use client";

import React, { useState } from "react";
import { useModalProvider } from "../../../context/ModalProvider";
import Modal from "../../common/Modal";

const ServiceItem = ({ title, description, amount, icon, index }) => {
    const modalContext = useModalProvider();
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");

    const handleServiceClick = () => {
        if (modalContext && modalContext.show) {
            modalContext.show();
        } else {
            console.error("Modal context not available");
        }
    };

    const handlePurchase = () => {
        if (!buyerName.trim() || !buyerEmail.trim()) {
            alert("Please fill in all fields");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(buyerEmail)) {
            alert("Please enter a valid email address");
            return;
        }

        // Create the redirect URL with parameters
        const redirectUrl = `https://reseller.uplef.com/invoice/create?reseller_id=4353&service_title=${encodeURIComponent(title)}&service_amount=${amount}&buyer_name=${encodeURIComponent(buyerName)}&buyer_email=${encodeURIComponent(buyerEmail)}`;
        
        // Redirect to the URL
        window.open(redirectUrl, '_blank');
        
        // Reset form and hide modal
        setBuyerName("");
        setBuyerEmail("");
        if (modalContext && modalContext.hide) {
            modalContext.hide();
        }
    };

    const handleCancel = () => {
        setBuyerName("");
        setBuyerEmail("");
        if (modalContext && modalContext.hide) {
            modalContext.hide();
        }
    };

    return (
        <>
            <div 
                className={`service-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:scale-105 ${
                    index % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'
                }`}
                onClick={handleServiceClick}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{icon}</div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${amount}</div>
                        <div className="text-sm text-white/60">Starting from</div>
                    </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-primary text-sm font-medium">Click to purchase →</div>
                </div>
            </div>

            <Modal title="Purchase Service">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{description}</p>
                        <div className="text-2xl font-bold text-primary">${amount}</div>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                value={buyerName}
                                onChange={(e) => setBuyerName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your full name"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                value={buyerEmail}
                                onChange={(e) => setBuyerEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={handlePurchase}
                            className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-medium"
                        >
                            Proceed to Payment
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ServiceItem;
