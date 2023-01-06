import React from 'react';

const BigGallery = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">What is the relation between iStore & CPL?</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">iStore is a Registered & Trademarked retail channel owned by CPL and also authorized reseller approved by apple.</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1550029402-226115b7c579?auto=format&q=75&fit=crop&crop=top&w=500&h=300" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1611740677496-3e0ef378e189?auto=format&q=75&fit=crop&crop=top&w=501&h=301" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="
                                https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?auto=format&q=75&fit=crop&crop=top&w=600&h=360" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1616353071588-708dcff912e2?auto=format&q=75&fit=crop&crop=top&w=601&h=361" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="
                               https://images.unsplash.com/photo-1616353071630-13cb38412d41?iauto=format&q=75&fit=crop&crop=top&w=502&h=302" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="
                               https://images.unsplash.com/photo-1624204732323-00b88a0ee844?auto=format&q=75&fit=crop&crop=top&w=503&h=303" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BigGallery;