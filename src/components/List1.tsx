import React from "react";
import "../styles/List.css";


const List1: React.FC = () => {
    return (
        <ul className="styled-list">
            <li className="highlight">Iron Man</li>
            <li>Doctor Strange</li>
            <li>Winter Soldier</li>
            <li>Adam Warlock</li>
            <li>Magneto</li>
        </ul>
    );
};

export default List1;
