import React from 'react'

const Page = () => {
    return (
        <div style={{ paddingTop: '50px' }}>
            <div className="headrhdng">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 content">
                        <h3>For your convenience, we have created a comprehensive list of Frequently Asked Questions (FAQ).</h3>
                        <form className="form-horizontal">
                            <div className="form-group row">
                                <label for="requestType" className="col-sm-2 control-label">Type of Request</label>
                                <div className="col-sm-10">
                                    <input className="checklist" name="request_type" id='requestType' value="Tech" checked="checked" type="radio" />
                                    <label className='contact-form-label'> Technical</label>
                                    <div className='contact-form-desc'>Eg. monitoring, report, notification</div>
                                    <div style={{paddingTop:"8px"}}>
                                        <input 
                                            className="checklist" 
                                            name="request_type" 
                                            value="Tech" 
                                            checked="checked"
                                            type="radio"
                                        />
                                        <label className='contact-form-label'> Reseller</label>
                                        <div className='contact-form-desc'>Eg. reseller website, reseller billing, questions asked by clients</div>
                                    </div>
                                    <div style={{paddingTop:"8px"}}>
                                        <input 
                                            className="checklist" 
                                            name="request_type" 
                                            value="Tech" 
                                            checked="checked"
                                            type="radio" 
                                        />
                                        <label className='contact-form-label'> Sales/Billing</label>
                                        <div className='contact-form-desc'>Eg. pre-sales, payment</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-3 mt-3">
                                <label for="" className="col-sm-2 control-label">Subject</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="#" />
                                </div>
                            </div>

                            <div className="form-group row mb-3 mt-3">
                                <label for="" className="col-sm-2 control-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="#" />
                                </div>
                            </div>


                            <div className="form-group row mb-3 mt-3">
                                <label for="" className="col-sm-2 control-label"> Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="#" />
                                </div>
                            </div>



                            <div className="form-group row mb-3 mt-3">
                                <label for="" className="col-sm-2 control-label"> Username</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="#" />
                                </div>
                            </div>


                            <div className="form-group row mb-3 mt-3">
                                <label for="inputPassword3" className="col-sm-2 control-label"> Message</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>

                            <div className="form-group row mb-3 mt-3">
                                <label for="" className="col-sm-2 control-label"> </label>
                                <div className="col-sm-10 text-end">
                                    <button className="btn btn-warning btn-lg me-3">Submit</button> 
                                    <button className="btn btn-primary btn-lg">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page