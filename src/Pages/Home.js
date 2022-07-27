import React from 'react';
import Carosel from '../Components/Header/Carosel';
import Category from '../Components/Category/Category'
import Different from '../Components/Different/Different';
import DailyUpdate from '../Components/DailyUpdate/DailyUpdate';
const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Category></Category>
            <Different></Different>
            <DailyUpdate></DailyUpdate>
        </div>
    );
};

export default Home;