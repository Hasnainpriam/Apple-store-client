import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const displayContent = (text) => {
        return text.length < 60 ? text : text.slice(0, 60) + "...";
    };


    return (
        <>

            <section>
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12 mt-5">Inventory Items</h2>
                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">In official product you get the guarantee to get inactive/intact product along with original accessories. On the other hand, in unofficial product we have observed replacement of original accessories with lookalike copy, aside in more than 60% cases customer gets active product.</p>
                <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="relative mx-auto max-w-7xl lg:px-10">
                        <div className="grid max-w-lg gap-5 lg:gap-16 mx-auto lg:grid-cols-3 lg:max-w-none">

                            {
                                products.slice(0, 6)
                                .filter((p) => user?.email === p.email)
                                .map(product => <div
                                    key={product._id}>

                                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-full h-48" src={product.img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">

                                                <p className=" block mt-2 text-xl font-semibold text-neutral-600">{product.name}</p>
                                                <p className="mt-3 text-base text-gray-500">{displayContent(product.description)}</p>

                                                <p className="text-lg font-semibold text-neutral-600 mt-5">Available Product {product.stock}</p>
                                                <div className="flex items-end gap-1 mt-3">
                                                    <span className="self-start text-gray-600">$</span>
                                                    <span className="text-2xl text-gray-800 font-bold">{product.price}</span>
                                                    <span className="text-gray-500">per/product</span>
                                                </div>


                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex items-center mt-6">
                                                    <div>
                                                        <p className="text-sm font-medium text-neutral-600">
                                                            Supplier : {product.supplier}
                                                        </p>

                                                    </div>

                                                </div>

                                                <Link to={`/update/${product._id}`}><button className=" mt-6 inline-block bg-gray-800 hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Update</button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>)

                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Inventory;