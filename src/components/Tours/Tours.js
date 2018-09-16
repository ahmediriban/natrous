import React,{ Component } from 'react';
import Card from "./Cards/Card";


class Tours extends Component {
    state={
        cards:[
            {
                id:1,
                head: 'The sea explorer',
                dayTour: 3,
                people: 30,
                guideTour: 2,
                sleepPlace: 'cozy hotel',
                difficulty: 'easy',
                price: '297$'
            },
            {
                id:2,
                head: 'The forest hiker',
                dayTour: 7,
                people: 40,
                guideTour: 6,
                sleepPlace: 'provided tents',
                difficulty: 'medium',
                price: '497$'
            },
            {
                id:3,
                head: 'The snow adventure',
                dayTour: 5,
                people: 15,
                guideTour: 3,
                sleepPlace: 'provided tents',
                difficulty: 'hard',
                price: '897$'
            }
        ]
    };
    render(){
        const cards = this.state.cards.map(card=> <Card
            key={card.id}
            id={card.id}
            head={card.head}
            dayTiur={card.dayTour}
            people={card.people}
            guideTour={card.guideTour}
            sleepPlace={card.sleepPlace}
            difficulty={card.difficulty}
            price={card.price}
            clicked={this.props.clicked}

        />);
        return(
            <div className="tours" id="_tours">
                <div className="u-center-content u-margin-bottom-big">
                    <h2 className="secondary-heading">
                        most popular tours
                    </h2>
                </div>
                <div className="row">
                    {cards}
                </div>
                <div className="u-center-content u-margin-top-huge">
                    <a href="#" className="btn btn--green">discover all tours</a>
                </div>
            </div>
        );
    }

}

export default Tours;