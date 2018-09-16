import React from 'react';

import photo1 from '../../assets/images/nat-8.jpg';
import photo2 from '../../assets/images/nat-9.jpg';

const Popup =(props)=>{
    return(
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={photo1} alt="Photo 1" className="popup__img"/>
                    <img src={photo2} alt="Photo 2" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <a href="#_tours" className="popup__close">&times;</a>
                    <div className=" u-margin-bottom-small">
                        <h2 className="secondary-heading">
                            start booking now
                        </h2>
                    </div>
                    <h3 className="tertiary-heading u-margin-bottom-small">
                        important - please read the terms and conditions first
                    </h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos unde minus impedit dolorem adipisci incidunt at provident omnis similique? Quisquam similique deleniti quibusdam, qui aspernatur architecto natus expedita eius earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt id dolor hic, labore necessitatibus inventore natus! Ea est atque odio at aliquam, ipsam enim perferendis beatae dolorum voluptatum suscipit molestiae labore optio ad voluptates molestias, dolore rerum natus corporis iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eum ipsam iure! A iste minus nisi temporibus quaerat corporis odit.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    );
};

export default Popup;