import React from 'react';

import photo1 from"../../assets/images/nat-8.jpg";
import photo2 from"../../assets/images/nat-9.jpg";
import video1 from"../../assets/videos/video.mp4";
import video2 from"../../assets/videos/video.webm";

const Stories =(props)=>{
    return(
        <div className="stories">
            <div className="bg__video">
                <video className="bg__video-content" muted autoPlay loop>
                    <source src={video1} type="video/mp4"/>
                    <source src={video2} type="video/mp4"/>
                    browser not supported!
                </video>
            </div>
            <div className="u-center-content u-margin-bottom-big">
                <h2 className="secondary-heading">
                    we make people genuinely happy
                </h2>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">

                        <img src={photo1} alt="Costumer 1" className="story__img"/>
                        <figcaption className="story__caption">Mary Smith</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="tertiary-heading u-margin-bottom-small">
                            i had the best week ever with my family
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={photo2} alt="Costumer 1" className="story__img"/>
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="tertiary-heading u-margin-bottom-small">
                            wow!my life is completely different now
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                        </p>
                    </div>
                </div>
            </div>
            <div className="u-center-content u-margin-top-huge">
                <a href="#" className="text-btn">Read All Stories &rarr;</a>
            </div>
        </div>
    );
};

export default Stories;