import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (


        <nav className="fixed top-0 left-0 bg-white w-full shadow">
            <div className="container m-auto flex justify-between items-center text-gray-700">
                <h1 className="pl-8 py-4 text-xl font-bold">Laptops Warehouse</h1>
                <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                    <Link to='/' className="hover:bg-gray-200 py-4 px-6">Home</Link>
                    <Link to='#item' className="hover:bg-gray-200 py-4 px-6">items</Link>
                    <Link to='#Client' className="hover:bg-gray-200 py-4 px-6">Client</Link>
                    <Link to='#Contact' className="hover:bg-gray-200 py-4 px-6">Contact</Link>
                </ul>
                <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
                    <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div className="w-5 h-1 bg-gray-600"></div>
                    <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
      group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                        <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                            <Link to='/' className="hover:bg-gray-200 py-4 px-6 w-full">Home</Link>
                            <Link to='#item' className="hover:bg-gray-200 py-4 px-6 w-full">items</Link>
                            <Link to='#Client' className="hover:bg-gray-200 py-4 px-6 w-full">Client</Link>
                            <Link to='#Contact' className="hover:bg-gray-200 py-4 px-6 w-full">Contact</Link>
                        </ul>
                    </div>
                </button>
            </div>
        </nav>


    );
};

export default Navbar;