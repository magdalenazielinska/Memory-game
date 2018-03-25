import React from 'react';

const cardClasses = ['shoes', 'goggles', 'axe', 'rope', 'mountains', 'carabiner', 'map', 'sign', 'jacket', 'compass', 'gloves', 'backpack', 'shoes', 'goggles', 'axe', 'rope', 'mountains', 'carabiner', 'map', 'sign', 'jacket', 'compass', 'gloves', 'backpack'];

export class GameBoard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            classes: cardClasses,
            clicked: false
        }
    }

    showCard = (index) => {
        this['card'+ index].classList.remove('gameboard_card--hide');
    }

    render() {
        let cards = this.state.classes.map( (item, index) => {
            let card = 'this.card' + index;
            let classes = 'gameboard_card gameboard_card--hide ' + item;
            return <div
                ref={item => this['card' + index] = item}
                key={index}
                className={classes}
                onClick={() => {this.showCard(index)}}></div>
        });

        return (
            <div className='gameboard'>
                {cards}
            </div>
        )
    }
}