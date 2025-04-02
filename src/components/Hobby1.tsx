import React from "react";
import List1 from "./List1";
import Table1 from "./Table1";
import Form1 from "./Form1";

interface Hobby1Props {
    name: string;
    hobby: string;
    imageSrc: string;
}

const Hobby1: React.FC<Hobby1Props> = ({ name, hobby, imageSrc }) => {
    return (
        <section>
            <h2>{name}'s Hobby: {hobby}</h2>
            <img src={imageSrc} alt={hobby} width="640" />
            <h2>My Favorite Marvel Rivals Characters:</h2>
            <List1 />
            <Table1 />
            <Form1 />
        </section>
    );
};

export default Hobby1;
