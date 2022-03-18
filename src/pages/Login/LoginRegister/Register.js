import React from 'react';

const Register = () => {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <div className="col-sm-12">
                    <input className="form-control" placeholder="Name" type="text"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input className="form-control" id="email" placeholder="Email" type="email"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input className="form-control" id="mobile" placeholder="Mobile" type="email"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input className="form-control" id="password" placeholder="Password" type="password"/>
                </div>
            </div>
            <div className="row">							
                <div className="col-sm-10">
                    <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                        Save &amp; Continue
                    </button>
                    <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                        Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default Register;