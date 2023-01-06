import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1616781677825-3c8cfc2f79a6?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Difference between javascript and nodejs?</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">JavaScript is a simple programming language that runs on the JavaScript Engine in any browser. </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed 
                                text-lg mb-4">While Node JS is an interpreter or runtime environment for the JavaScript programming language, NodeJS: NodeJS is a cross-platform, open-source Javascript runtime environment that enables server-side javascript execution. Javascript code can now execute outside of the browser thanks to Nodejs. Nodejs has a large number of modules and is primarily used in web development.

                                    JavaScript is a type of scripting language. JS is the most common abbreviation. Javascript might be considered an updated version of the ECMA script. Javascript is a high-level programming language that is built on prototype inheritance and employs the Oops notion.</p>
                                <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1630168567476-cb79a02d3f9d?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">When should you use nodejs and when should you use mongodb?</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">MongoDB is a database where we may store data, and NodeJS is a server that enables us connect our client site to the database.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Nodejs is a Javascript engine that can be used to create any application (by programming in the Javascript language). It executes Javascript code. It is most typically used to create web servers, but it may also be used to create a variety of other types of programming.

                                    MongoDB is a database management system. MongoDB is used by code within an application or server to save, query, and update data in a database. Many web servers developed with Node.js will store data in MongoDB.</p>
                                <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1542972587-84201daf1ed5?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">What is the purpose of jwt and how does it work?</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">JWTs are used to authenticate users and communicate information in a secure manner.  </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">The issuer typically signs the JWT using a private key, or secret. The receiver of the JWT will check the signature to make sure the token hasn't been tampered with after the issuer signed it. Unauthenticated sources will have a hard time guessing the signing key and attempting to modify the claims within the JWT..However, not all signature algorithms are made equal. Some signature techniques, for example, use a secret value shared between the issuer and the party who verifies the JWT. A public and private key is used in other algorithms. The issuer has access to the private key, but the public key can be shared freely. Only the private key can be used to create the signature; the public key can only be used to validate it. Because the private key only needs to exist in one location, it is more secure than a shared secret.</p>
                                <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;