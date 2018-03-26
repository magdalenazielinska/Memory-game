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
            hours: 0,
            minutes: 0,
            seconds: 0,
            moves: 0,
            matches: 0,
            active: []
        }
    }

    componentWillMount() {
        let shuffleCards = this.shuffleCard(cardClasses);
        this.setState({
            classes: shuffleCards
        })
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            if (this.state.matches < 12) {
                if (this.state.moves > 0) {
                    this.setState({
                        seconds: Number(this.state.seconds) + 1
                    });
                    if (this.state.seconds === 60) {
                        this.setState({
                            seconds: 0,
                            minutes: Number(this.state.minutes) + 1
                        });
                        if (this.state.minutes === 60) {
                            this.setState({
                                minutes: 0,
                                hours: Number(this.state.minutes) + 1
                            });
                        }
                    }
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    shuffleCard(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    showCard = (index) => {
        this['card'+ index].classList.remove('gameboard_card--hide');
        this['card'+ index].classList.add('gameboard_card--disabled');
        let activeAdd = this.state.active;
        activeAdd.push(this['card'+ index]);
        this.setState({
            active: activeAdd
        });

        this.addMoves();
    }

    addMoves() {
        if (this.state.active.length === 2) {
            let movesAdd = this.state.moves;
            movesAdd++;
            this.setState({
                moves: movesAdd
            });

            this.matchCards();
            this.tempDisable();
        }
    }

    matchCards() {
        if (this.state.active[0].className === this.state.active[1].className) {
            let matchesAdd = this.state.matches;
            matchesAdd++;
            this.state.active[0].classList.add('gameboard_card--match');
            this.state.active[1].classList.add('gameboard_card--match');
            this.setState({
                matches: matchesAdd,
                active: []
            });
        }
        else {
            this.state.active[0].classList.add('gameboard_card--unmatch');
            this.state.active[1].classList.add('gameboard_card--unmatch');
            this.state.active[0].classList.remove('gameboard_card--disabled');
            this.state.active[1].classList.remove('gameboard_card--disabled');
            setTimeout(() => {
                this.state.active[0].classList.add('gameboard_card--hide');
                this.state.active[1].classList.add('gameboard_card--hide');
                this.state.active[0].classList.remove('gameboard_card--unmatch');
                this.state.active[1].classList.remove('gameboard_card--unmatch');
                this.setState({
                    active: []
                });
            }, 1000);
        }
    }

    tempDisable() {

    }

    newGame = () => {
        let newCards = this.shuffleCard(cardClasses);
        clearInterval(this.intervalId);
        this.setState({
            classes: newCards,
            hours: 0,
            minutes: 0,
            seconds: 0,
            moves: 0,
            matches: 0,
            active: []
        });
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
                <MenuPanel time={this.state.time}
                           moves={this.state.moves}
                           hours={this.state.hours}
                           minutes={this.state.minutes}
                           seconds={this.state.seconds}
                           newGame={this.newGame}/>
                <div className='gameboard'>
                    {cards}
                </div>
            </div>
        )
    }
}