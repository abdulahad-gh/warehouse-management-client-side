import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    const { pathname } = useLocation()
    console.log(pathname, pathname.includes('inventory'))
    if (pathname.includes('inventory')) {
        document.getElementById('footer').style.marginTop = '240px'
    }

    // else {
    //     document.getElementById('footer').style.marginTop = '100px'

    // }
    return (
        <div id='footer' className='dark:bg-gray-800 text-white md:flex text-center justify-around md:p-4 top-100 w-full  absolute '>


            <div>
                <h3>Laptops Warehouse</h3>
                © {year} Laptops Warehouse All Rights Reserved
            </div>




            <div className='flex  justify-center	items-center	'>
                <Link to='https://web.facebook.com/'><img width={60} src="https://i.ibb.co/0rSZVCk/download-removebg-preview.png" alt="" /></Link>
                <Link to='https://www.linkedin.com/'><img width={60} src="https://i.ibb.co/80Mg2fR/images-2-removebg-preview.png" alt="" /></Link>
                <Link to='https://twitter.com/'><img width={60} src="https://i.ibb.co/tb0RBv2/download-removebg-preview-1.png" alt="" /></Link>
                <Link to='https://www.youtube.com/'><img width={60} src="https://i.ibb.co/W68q05x/images-4-removebg-preview-1.png" alt="" /></Link>
            </div>
        </div>

    );
};

export default Footer;