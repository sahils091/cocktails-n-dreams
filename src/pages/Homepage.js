import React  from 'react';
import Hero from '../components/Hero/Hero';
import Input from '../components/Input/Input';
import "./homepage.scss"


const Homepage = () => {
    
    return (
        <div id="home">
            <Hero/>
            <Input/>
        </div>
    );
};

export default Homepage;