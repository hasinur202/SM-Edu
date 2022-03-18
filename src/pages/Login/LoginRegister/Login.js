import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Register from './Register';


const Login = () => {
    const [error, setError] = useState("");
    const history = useHistory();
    const location = useLocation();
    const [loginData, setLoginData] = useState({});

    const { user, signInUsingGoogle, loginUser, isLoading, authError } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        e.preventDefault();
        if(loginData.password.length < 6 ) {
            setError('Password must be atleast 6 characters long');
            return;
        }

        loginUser(loginData.email, loginData.password, location, history);
        setError('');
        // e.preventDefault();
    }

    return (
        <>
        <Header></Header>
            <div className="all-title-box">
                <div className="container text-center">
                    <h1>Login<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                </div>
	        </div>
            <div id="overviews" className="section lb">
                <div className="container">
                    <div className='text-center'>
                        {/* {isLoading && <Spinner animation="border" variant="danger" />} */}
                        {isLoading && <h2>Loading...</h2>}
                        {user?.email && <div className="py-3 mt-3 text-danger bg-success">Login successfully!</div>}
                        {authError && <div className="py-3 mt-3 text-danger">{authError}</div>}
                    </div>

                    <div className='customer-box'>
                        <ul className="nav nav-tabs">
                            <li><a className="active" href="#Login" data-toggle="tab">Login</a></li>
                            <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                                <form onSubmit={handleLogin} className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input required onBlur={handleOnChange} className="form-control" id="email" placeholder="Email" type="email" name='email'/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input required onBlur={handleOnChange} className="form-control" id="password" placeholder="Enter Your Password" type="password" name='password'/>
                                            <span>
                                                {error}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-light btn-radius btn-brd grd1">
                                                Submit
                                            </button>
                                            <Link to="/login" className="for-pwd">Forgot your password?</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                                <Register></Register>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
                    </div>
                 </div>
             </div>
        <Footer></Footer>
        </>
    );
};

export default Login;