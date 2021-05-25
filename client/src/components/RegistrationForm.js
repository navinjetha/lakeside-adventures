import React, { useState} from 'react';
import { BrowseRouter as Router, Link, useHistory } from 'react-router-dom';
import AuthService from "../services/auth.service";

function RegistrationForm({ signUp, error }) {
    const [details, setDetails] = useState({name:"", email: "", password:""});
    const history = useHistory();
    
    const submitHandler = e => {
        e.preventDefault();
        signUp(details, history)
       
    }

    return (
        <form className="form-outer" onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                { (error != "") ? ( <div className="error">{error}</div>) : "" }
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="SIGN UP" />
                <div>
                    <Link className="link-login" to="/login">Already have account?</Link>
                </div>
            </div>
        </form>
    )
};

export default RegistrationForm;