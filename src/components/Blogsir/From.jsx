import React, { Component } from 'react';



export default class Form extends Component {


    render() {

        return (
            <>
                <h1>Form</h1>
                <br/>                
                <form action="backend.php">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="myName" id="name" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="role">Role: </label>
                        <input type="text" name="myRole" id="role" />
                    </div>

                    <br />

                    <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="myEmail" id="email" />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="myDate" id="date" />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="Eligibility">Are You Eligible: </label>
                        <input type="checkbox" name="myEligibility" id="Eligibility" />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="gender">Gender: </label>
                        
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="myGender" id="male" />
                        
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="myGender" id="female" />
                        
                        <label htmlFor="other">Other</label>
                        <input type="radio" name="myGender" id="other" />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="myself">About your self: </label>
                        <br />
                        <textarea name="myText" id="myself" cols="30" rows="5">     </textarea>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="car">Car: </label>
                        <select name="myCar" id="car">
                            <option value="ind" > Indica </option>
                            <option value="swf" selected> Swift </option>
                        </select>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="submit">Submit Now: </label>
                        <input type="submit" value="submit Now" id="submit" />
                        <label htmlFor="reset">Reset: </label>
                        <input type="submit" value="Reset" id="reset" />
                    </div>

                    <br/>

                </form>
            </>

        )
    }

}