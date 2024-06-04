import React from 'react'

const Page = () => {
    return (
        <div style={{ paddingTop: "50px" }}>
            <div className="headrhdng">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>Login In</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 content">
                        <h2>Please Log In</h2>
                        <div className="row">
                            <div className="col-md-4"> <i className="fa fa-sign-in" style={{fontSize: "300px", color: "#2C3E50"}}></i> </div>
                            <div className="col-md-8" style={{paddingTop: "20px"}}>
                                <div className="panel panel-default">
                                    <div className="panel-heading"> <strong> Log in to the monitoring control panel.</strong> </div>
                                    <div className="panel-body">
                                        <form role="form">
                                            <br />
                                            <div class="input-group flex-nowrap">
                                                <span class="input-group-text" id="addon-wrapping">@</span>
                                                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div class="input-group flex-nowrap">
                                                <span class="input-group-text" id="addon-wrapping">&#128274;</span>
                                                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className="text-right"><a href="#" className="btn btn-warning">Login</a></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page