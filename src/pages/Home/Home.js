import React from 'react';
import { ToastContainer } from 'react-toastify';
import Banner from './Banner';
import Client from './Client';
import Contact from './Contact';
import Items from './Items';

const Home = () => {
    return (
        <>
            <Banner />
            <Items />
            <Client />
            <Contact />
            <ToastContainer />


        </>

    );
};

export default Home;