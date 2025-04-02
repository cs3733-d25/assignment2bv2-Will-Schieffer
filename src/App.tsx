import React from "react";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Hobby1 from "./components/Hobby1";
import Hobby2 from "./components/Hobby2";
import "./styles/App.css";

const App: React.FC = () => {
    return (
        <div>
            <Title teamNumber={60} hobby1="Video Games" hobby2="Baking" />
            <Intro name1="Christian" name2="Will" />
            <Hobby1 name="Christian" hobby="Video Games" imageSrc="public/Marvel Rivals.jpg" />
            <Hobby2 name="Will" hobby="Baking" imageSrc="public/Easter Cake Eaten.png" />
        </div>
    );
};

export default App;
