import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
    return <>
        <div className="container-fluid bg-white">
                <div className="footerBanner d-flex flex-row">
                    <div className="bannerImgDiv">
                        <img className="img-fluid img-responsive" src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt="bannerimg" />
                    </div>

                    <div className="bannerTitle">
                        <h3>TRY THE OLX APP</h3>
                        <h5>Buy, Sell and find just about anything using <br /> the app on your mobile.</h5>
                    </div>
                    <div className="bannerlinkImg">
                        <h6>GET YOUR APP TODAY</h6>
                        <img className="img-fluid img-responsive" src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="download" />
                        <img className="img-fluid img-responsive" src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="download1" />
                    </div>

                </div> 
                    <div className="row frow mt-3">
                      <div className="col-md-1"></div> 
                           {/* first div */}
                        <div className="col-md-2">
                            <ul className="list-unstyled">
                                <li><strong>POPULAR CATEGORIES</strong></li>
                                <li><Link className="fc" to="/cars">Cars</Link></li>
                                <li><Link className="fc" to="/Land&Plots">Land & Plots</Link></li>
                                <li><Link className="fc" to="/Houses">Houses</Link></li>
                                <li><Link className="fc" to="/MobilePhones">Mobile Phones</Link></li>
                            </ul>
                        </div>
                        {/* second div */}
                        <div className="col-md-2">
                            <ul className="list-unstyled">
                                <li><strong>TRENDING SEARCHES</strong></li>
                                <li><Link className="fc" to="/Motorcycles">Bikes</Link></li>
                                <li><Link className="fc" to="/Accessories">Mobile Accessories</Link></li>
                                <li><Link className="fc" to="/Tablets">Tablets</Link></li>
                                <li><Link className="fc" to="/SpareParts">Spare Parts</Link></li>
                            </ul>
                        </div>
                        {/* third div  */}
                        <div className="col-md-2">
                            <ul className="list-unstyled">
                                <li><strong>ABOUT US</strong></li>
                                <li>About OLX group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </div>
                        {/* fourth div */}
                        <div className="col-md-2">
                            <ul className="list-unstyled">
                                <li><strong>OLX</strong></li>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy information</li>
                            </ul>
                        </div>
                        {/* fifth div */}
                        <div className="col-md-2">
                            <ul className="list-unstyled">
                                <li><strong className="mb-3">FOLLOW US</strong></li>
                                <li>
                                    <i className="fa fa-facebook-official social"></i>
                                    <i className="fa fa-twitter social"></i>
                                    <i className="fa fa-youtube-play social"></i>
                                    <i className="fa fa-instagram social"></i>
                                </li>
                            </ul>
                        <div className="col-md-1"></div> 
                        </div>
                          
                    </div>
                </div>
                <div className="footercredit p-2 d-flex justify-content-center">
                        <div className="d-flex align-items-center"> <strong>Free Classifieds in Pakistan.</strong> &nbsp;&nbsp;
                        <span>&#169; 2006-2020 OLX</span>
                        </div>
                    </div>      
    </>
           
    }

}
export default Footer;