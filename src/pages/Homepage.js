import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Input from '../components/Input/Input';
import "./homepage.scss"

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Input/>
        </div>
    );
};

export default Homepage;