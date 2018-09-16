import React from 'react';

import photo1 from '../../assets/images/nat-1-large.jpg';
import _photo1 from '../../assets/images/nat-1.jpg';
import photo2 from '../../assets/images/nat-2-large.jpg';
import _photo2 from '../../assets/images/nat-2.jpg';
import photo3 from '../../assets/images/nat-3-large.jpg';
import _photo3 from '../../assets/images/nat-3.jpg';


const About =(props)=>{
    return(
        <section className="about-section">
            <div className="u-center-content u-margin-bottom-big">
                <h2 className="secondary-heading">
                    Exciting tours for adventurous people
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="tertiary-heading u-margin-bottom-small">
                        You're going to fall in love with nature
                    </h3>
                    <p className="paragraph">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h3 className="tertiary-heading u-margin-bottom-small">
                        live adventures like you never have before
                    </h3>
                    <p className="paragraph">
                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                    <a href="#" className="text-btn">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img srcSet={`${_photo1} 300w, ${photo1} 1000w`}
                             sizes="(max-width: 65.25) 20vh, (max-width: 37.5) 30vh, 300px"
                             src={photo1}
                             alt="Photo 1"
                             className="composition__photo composition__photo--1"
                        />

                        <img srcSet={`${_photo2} 300w, ${photo2} 1000w`}
                             sizes="(max-width: 65.25) 20vh, (max-width: 37.5) 30vh, 300px"
                             src={photo2}
                             alt="Photo 2"
                             className="composition__photo composition__photo--2"
                        />

                        <img srcSet={`${_photo3} 300w, ${photo3} 1000w`}
                             sizes="(max-width: 65.25) 20vh, (max-width: 37.5) 30vh, 300px"
                             src={photo3}
                             alt="Photo 3"
                             className="composition__photo composition__photo--3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;