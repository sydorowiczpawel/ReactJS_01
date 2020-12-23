import React from 'react';

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Content from "../../components/Content";

function MainPage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Content />
            <Footer />
        </div>
    );
}

export default MainPage;
