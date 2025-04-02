import React from "react";

const Form1 = () => {
    return (
        <div>
            <h2>Tell Me About Your Favorite Games!</h2>
            <form>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" /><br />

                <label htmlFor="email">Your Email:</label>
                <input type="text" id="email" name="email" /><br />

                <fieldset>
                    <legend>What type of games do you like?</legend>
                    <input type="checkbox" id="fps" name="genre" value="FPS" />
                    <label htmlFor="fps">First-Person Shooter</label><br />

                    <input type="checkbox" id="rpg" name="genre" value="RPG" />
                    <label htmlFor="rpg">Role-Playing Game</label><br />

                    <input type="checkbox" id="strategy" name="genre" value="Strategy" />
                    <label htmlFor="strategy">Strategy</label><br />
                </fieldset>

                <fieldset>
                    <legend>Which platform do you play on most?</legend>
                    <input type="radio" id="pc" name="platform" value="PC" />
                    <label htmlFor="pc">PC</label><br />

                    <input type="radio" id="ps5" name="platform" value="PS5" />
                    <label htmlFor="ps5">PlayStation 5</label><br />

                    <input type="radio" id="xbox" name="platform" value="Xbox" />
                    <label htmlFor="xbox">Xbox</label><br />
                </fieldset>

                <label htmlFor="favorite-game">Your Favorite Game:</label>
                <select id="favorite-game" name="favorite-game">
                    <option value="Celeste">Celeste</option>
                    <option value="Fortnite">Fortnite</option>
                    <option value="Sekiro">Sekiro</option>
                    <option value="Other">Other</option>
                </select><br />

                <label htmlFor="comments">Additional Comments:</label><br />
                <textarea id="comments" name="comments" rows={4} cols={40}></textarea><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form1;
