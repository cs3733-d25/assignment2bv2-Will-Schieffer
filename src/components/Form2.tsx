import React from "react";

const Form2: React.FC = () => {
    return (
        <form id="dish-form">
            <fieldset>
                <legend>Dish Information</legend>

                <br />

                <div className="form-group">
                    <label htmlFor="dishname">Give your dish a name:</label>
                    <input type="text" id="dishname" name="dishname" required/>
                </div>

                <br/>

                <div className="form-group">
                    <fieldset>
                        <legend>Flavor Selection</legend>

                        <div className="radio-group">
                            <input type="radio" name="flavor" value="orange" id="orange" required/>
                            <label htmlFor="orange">Orange</label>
                        </div>

                        <div className="radio-group">
                            <input type="radio" name="flavor" value="cherry" id="cherry"/>
                            <label htmlFor="cherry">Cherry</label>
                        </div>

                        <div className="radio-group">
                            <input type="radio" name="flavor" value="grape" id="grape"/>
                            <label htmlFor="grape">Grape</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="altFlavor">Have Another Flavor In Mind?:</label>
                            <input type="text" id="altFlavor" name="altFlavor"/>
                        </div>
                    </fieldset>
                </div>

                <br/>

                <div className="form-group">
                    <fieldset>
                        <legend>Toppings</legend>

                        <div className="checkbox-group">
                            <input type="checkbox" id="sprinkles" name="toppings" value="sprinkles"/>
                            <label htmlFor="sprinkles">Sprinkles?</label>
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" id="frosting" name="toppings" value="frosting"/>
                            <label htmlFor="frosting">Frosting?</label>
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" id="cherryOnTop" name="toppings" value="cherryOnTop"/>
                            <label htmlFor="cherryOnTop">Cherry On Top?</label>
                        </div>
                    </fieldset>
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="size">How big?:</label>
                    <select id="size" name="size" required>
                        <option value="" disabled selected>Select size</option>
                        <option value="Kiddie Size">Kiddie</option>
                        <option value="Small Size">Small</option>
                        <option value="Medium Size">Medium</option>
                        <option value="Large Size">Large</option>
                    </select>
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea id="additionalNotes" name="additionalNotes" rows={4} cols={40}></textarea>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </fieldset>
        </form>
    );
};

export default Form2;
