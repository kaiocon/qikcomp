import React from 'react';

class dashboard extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <div className="container">

            <div className="card" style={{margin: "20px"}}>
                <div className="card-body">
                    <h5 className="card-title">Dashboard </h5>


                        <form className="profile" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value="John"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value="Doe"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Phone Number:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value="competitor@gmail.com" disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Country:</label>
                                <div className="col-sm-6">
                                    <div className="ui-select">
                                        <select id="user_time_zone" className="form-control">
                                            <option value="Hawaii">Scotland</option>
                                            <option value="Alaska">England</option>
                                            <option value="Pacific Time (US &amp; Canada)">USA
                                            </option>
                                            <option value="Arizona">Belgium</option>
                                            <option value="Mountain Time (US &amp; Canada)">Netherlands
                                            </option>
                                            <option value="Central Time (US &amp; Canada)"
                                                    selected="selected">France
                                            </option>
                                            <option value="Eastern Time (US &amp; Canada)">Germany
                                            </option>
                                            <option value="Indiana (East)">Canada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Username:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value="Username"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Password:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="password" value="11111122333"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Confirm password:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="password" value="11111122333"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-6">
                                    <input type="button" className="btn btn-primary" value="Save"/>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className='card' style={{margin: "20px"}}><div className='card-body' style={{textAlign: 'center'}}>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"/>
                            <h6>Upload a different photo...</h6>

                            <input type="file" className="form-control"/>

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <input type="button" className="btn btn-primary" value="Upload"/>

                        </div>
                    </div>
                </div> </div>

            </div>
        )
    }
}

export default dashboard;