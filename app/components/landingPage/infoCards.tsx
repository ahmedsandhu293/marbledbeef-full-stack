import React from "react";

const InfoCards = () => {
    return (
        <div className="flex flex-wrap justify-center items-center bg-black py-10 space-y-6 sm:space-y-0 sm:space-x-6 sm:flex-row gap-2">
            {/* Card 1 */}
            <div className="p-6 bg-black text-white border border-border-primary rounded-3xl w-full sm:w-[427px] h-60 flex flex-col justify-center items-start">
                <h3 className="text-3xl font-bold">Freshness Guarantee</h3>
                <p className="text-lg text-gray-400 mt-2">
                    Enjoy the best recipes with your family
                </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white text-black border border-gray-300 rounded-3xl w-full sm:w-[427px] h-60 flex flex-col justify-center items-start">
                <h3 className="text-3xl font-bold">Secure Payments</h3>
                <p className="text-lg text-gray-600 mt-2">
                    Paypal, Amex, Visa and MasterCard with installment plans
                </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-black text-white border border-border-primary rounded-3xl w-full sm:w-[427px] h-60 flex flex-col justify-center items-start">
                <h3 className="text-3xl font-bold">Free delivery</h3>
                <p className="text-lg text-gray-400 mt-2">
                    Over €99 for France, Monaco, Belgium, Luxembourg
                </p>
            </div>
        </div>
    );
};

export default InfoCards;
