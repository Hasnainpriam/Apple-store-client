import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/icons8-camera-66.png'
// import auth from '../../firebase.init';

const Navbar = () => {

    // const [user] = useAuthState(auth);

    const handleLogout = () => {
        // signOut(auth);
    }

    return (
        <header className="flex justify-between items-center py-8 md:py-8  max-w-screen-2xl px-4 md:px-10 mx-auto">

            <Link to='/' className="text-gray-800 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                <img src={logo} alt="" height={30} width={30} />

                iStore
            </Link>

            <nav className="hidden lg:flex gap-12">
                <Link to='/' className=" text-black text-lg font-semibold">Home</Link>
                <Link to='/manageItem' className="text-gray-500 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Inventory</Link>

                <Link to='/myItem' className="text-gray-500 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">My Items</Link>
                <Link to='/addItem' className="text-gray-500 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Add Item</Link>
                <Link to='/blog' className="text-gray-500 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Blogs</Link>
                <Link to='/about' className="text-gray-500 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">About</Link>
{/* 
                {
                    user ?
                        <Link onClick={handleLogout} to='/login' className="text-gray-600 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Logout</Link>
                        :
                        <Link to='/login' className="text-gray-600 hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Login</Link>
                } */}
            </nav>

            <Link to='/contact' className="hidden lg:inline-block bg-black hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Us</Link>

            <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>

                Menu
            </button>

        </header>

    );
};

export default Navbar;