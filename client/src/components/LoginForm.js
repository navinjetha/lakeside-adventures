import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';



function LoginForm({ signIn, error }) {
    const [details, setDetails] = useState({name:"", email: "", password:""});
    const history = useHistory();
    const submitHandler = e => {
        e.preventDefault();

        signIn(details, history);
    }

    return (
        <form className="form-outer" onSubmit={submitHandler} >
            <div className="form-inner">
                <h2>Login</h2>
                { (error != "") ? ( <div className="error">{error}</div>) : "" }
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
                <div>
                    <Link className="link-login" to="/register">Don't have an account?</Link>
                </div>
            </div>
        </form>
    )
};

export default LoginForm;

