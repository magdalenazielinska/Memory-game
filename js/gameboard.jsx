import React from 'react';
import { MenuPanel } from './menupanel.jsx';

const cardClasses = [
                        'shoes', 'goggles', 'axe', 'rope',
                        'mountains', 'carabiner', 'map', 'sign',
                        'jacket', 'compass', 'gloves', 'backpack',
                        'shoes', 'goggles', 'axe', 'rope',
                        'mountains', 'carabiner', 'map', 'sign',
                        'jacket', 'compass', 'gloves', 'backpack'
                    ];

export class GameBoard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            classes: cardClasses,
            clicked: false,
            time: '00:00:00',
            moves: 0,
            match: 0,
            active: []
        }
    }

    componentWillMount() {
        let shuffleCards = this.shuffleCard(cardClasses);
        this.setState({
            classes: shuffleCards
        })
    }

    shuffleCard(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    showCard = (index) => {

        //open the card
        this['card'+ index].classList.remove('gameboard_card--hide');
        let activeUpdate = this.state.active;
        activeUpdate.push(this['card'+ index]);
        this.setState({
            active: activeUpdate
        });

        //count moves
        this.addMoves();
    }

    addMoves() {
        if (this.state.active.length === 2) {
            let moves = this.state.moves;
            let movesAdd = moves + 1;
            this.setState({
                moves: movesAdd,
                active: []
            });
        }
        console.log(this.state.moves)
    }

    render() {
        let cards = this.state.classes.map( (item, index) => {
            let card = 'this.card' + index;
            let classes = 'gameboard_card gameboard_card--hide ' + item;
            //let classes = 'gameboard_card ' + item;
            return <div
                        ref={item => this['card' + index] = item}
                        key={index}
                        className={classes}
                        onClick={() => {this.showCard(index)}}>
                    </div>
        });

        return (
            <div>
                <MenuPanel time={this.state.time} moves={this.state.moves}/>
                <div className='gameboard'>
                    {cards}
                </div>
            </div>
        )
    }
}