import React from "react";

const Table1: React.FC = () => {
    return (
        <table className="collapse">
            <caption><b>Popular Video Games</b></caption>
            <thead>
            <tr>
                <th>Game</th>
                <th>Platform</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Celeste</td>
                <td>Steam</td>
                <td>$14.99</td>
            </tr>
            <tr>
                <td>Fortnite</td>
                <td>Epic Games</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Sekiro</td>
                <td>Steam</td>
                <td>$59.99</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table1;
