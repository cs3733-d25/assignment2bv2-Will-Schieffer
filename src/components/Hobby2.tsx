import React from "react";
import List2 from "./List2";
import Table2 from "./Table2";
import Form2 from "./Form2";

interface Hobby2Props {
    name: string;
    hobby: string;
    imageSrc: string;
}

const Hobby2: React.FC<Hobby2Props> = ({ name, hobby, imageSrc }) => {
    return (
        <section>
            <h2>{name}'s Hobby: {hobby}</h2>
            <img src={imageSrc} alt={hobby} width="640" />
            <List2 />
            <Table2 />
            <Form2 />
        </section>
    );
};

export default Hobby2;
