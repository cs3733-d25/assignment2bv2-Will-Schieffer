import React from "react";

const Table2: React.FC = () => {
    return (
        <table id="collapse">
            <caption>Difficulty of some of my more impressive Bakes, rated by me</caption>
            <tbody>
            <tr>
                <th>Name of Recipe</th>
                <th>Time required</th>
                <th>Difficulty of Steps</th>
            </tr>
            <tr>
                <td>Lavender Macarons</td>
                <td>Medium</td>
                <td>5/5</td>
            </tr>
            <tr>
                <td>Three Layer Neopolitan Cake</td>
                <td>Long</td>
                <td>2/5</td>
            </tr>
            <tr>
                <td>Christmas Popovers</td>
                <td>Short</td>
                <td>1/5</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table2;
