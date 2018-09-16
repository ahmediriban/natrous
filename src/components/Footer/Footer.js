import React from 'react';

import photo1 from '../../assets/images/logo-green-2x.png';
import photo2 from '../../assets/images/logo-green-1x.png';
import photo3 from '../../assets/images/logo-green-small-1x.png';
import photo4 from '../../assets/images/logo-green-small-2x.png';

const Footer =(props)=>{
    return(
        <footer className="footer">




            <div className="footer__logo-box">
                <picture className="footer__logo">
                    <source srcSet={`${photo4} 2x,${photo3} 1x`} media="(max-width:37.5rem)"/>
                    <img srcSet={`${photo1} 2x,${photo2} 1x`} alt="Full logo"/>
                </picture>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul>
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__copyright">
                        Built by <a href="#" className="footer__link">JONAS SCHMEDTMANN</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;