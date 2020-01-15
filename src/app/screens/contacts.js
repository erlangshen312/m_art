import React from 'react';

function Contact() {
  return (
    <div>
        <div className="container">
            <div id="fh5co-intro">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 col-md-pull-2">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
            <div id="fh5co-contact">
                <div className="row">
                    <div className="col-md-4 animate-box">
                        <h3>Contact Information</h3>
                        <ul className="contact-info">
                            <li><i className="icon-location4"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
                            <li><i className="icon-phone3"></i>+ 1235 2355 98</li>
                            <li><i className="icon-location3"></i><a href="#">info@yoursite.com</a></li>
                            <li><i className="icon-globe2"></i><a href="#">www.yoursite.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-8 animate-box">
                        <div className="form-wrap">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="" className="form-control" id="" cols="30" rows="15" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary btn-modify" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    </div>
  );
}

export default Contact;
