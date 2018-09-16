import React from 'react';

const Card =(props)=>{
    const array1 = ['card__photo',`card__photo-${props.id}`];
    const array2 = ['card__heading-span',`card__heading-span-${props.id}`];
    const array3 = ['card-side','card-side__back',`card-side__back-${props.id}`];
    return(
        <div className="col-1-of-3">
            <div className="card">
                <div className="card-side card-side__front">
                    <div className={array1.join(' ')}>
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className={array2.join(' ')}>{props.head}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{props.dayTour} day tours</li>
                            <li>Up to {props.people} people</li>
                            <li>{props.guideTour} tour guides</li>
                            <li>Sleep in {props.sleepPlace}</li>
                            <li>Difficulty: {props.difficulty}</li>
                        </ul>
                    </div>
                </div>
                <div className={array3.join(' ')}>
                    <div className="card-cta">
                        <div className="card__price-box">
                            <p className="card__price-only">only</p>
                            <p className="card__price-value">{props.price}</p>
                        </div>
                        <a href="#popup" className="btn header__btn--white" onClick={props.clicked}>Book now!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;