import React from "react";

interface TitleProps {
    teamNumber: number;
    hobby1: string;
    hobby2: string;
}

const Title: React.FC<TitleProps> = ({ teamNumber, hobby1, hobby2 }) => {
    return (
        <header>
            <h1>CS3733-D25 Team {teamNumber}: {hobby1} and {hobby2}</h1>
        </header>
    );
};

export default Title;
