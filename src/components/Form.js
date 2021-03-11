import React from 'react';
import './Form.css';

const Form = () => {

    const newButton = "Sign Up"

    return (
        <div>
            <div className="align">
                <form className="new_form">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" placeholder="Enter your name" />

                    <label htmlFor="Email">Enter Email</label>
                    <input type="email" placeholder="Type Your email" />

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" />

                    <label htmlFor="">Confirm Password</label>
                    <input type="password" />

                    <button type="submit">{newButton}</button>
                </form>
            </div>
        </div>
    )
}
export default Form;