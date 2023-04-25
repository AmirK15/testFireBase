import React from 'react';
import FirstScreen from "./FirstScreen/FirstScreen";
import Cars from "./Cars/Cars";
import Advantage from "./Advantage/Advantage";

const Home = () => {
    return (
        <main>
            <FirstScreen/>
            <Cars/>
            <Advantage/>
        </main>
    );
};

export default Home;