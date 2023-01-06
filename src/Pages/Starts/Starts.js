import React from 'react';

const Starts = () => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12 lg:mt-20 lg:mb-32">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our Sales by the numbers</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Compustar Private Limited is the brainchild of union group representing BTRC approved iPhone in Bangladesh market. CPL is the authorized re-seller of iPhone and a proud National distributor of this elegant brand.</p>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">

                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-bold">20</div>
                            <div className="text-sm sm:text-base font-semibold">Shops</div>
                        </div>

                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
                            <div className="text-sm sm:text-base font-semibold">Customer</div>
                        </div>


                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-bold">4000+</div>
                            <div className="text-sm sm:text-base font-semibold">Products</div>
                        </div>

                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
                            <div className="text-sm sm:text-base font-semibold">Coffee breaks</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Starts;