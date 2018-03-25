import React from 'react';

export class GameBoard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            class: 'gameboard_card--hide'
        }
    }

    showCard = () => {
        this.setState({hide: ''})
        this.ref.el1.classList.add
    }

    render() {

        this.state.klasy.map(klasa, index => {
            let final = 'gameboard_card '+klasa
            return  <div refclassName={final}></div>
        })
        return (
            <div className='gameboard'>
                <div ref={el => this.el1 = el} className='gameboard_card shoes' onClick={this.showCard}></div>
                <div className='gameboard_card shoes'></div>
                <div className='gameboard_card goggles gameboard_card--hide'></div>
                <div className='gameboard_card goggles'></div>
                <div className='gameboard_card axe'></div>
                <div className='gameboard_card axe'></div>
                <div className='gameboard_card rope'></div>
                <div className='gameboard_card rope'></div>
                <div className='gameboard_card mountains'></div>
                <div className='gameboard_card mountains'></div>
                <div className='gameboard_card carabiner'></div>
                <div className='gameboard_card carabiner'></div>
                <div className='gameboard_card map'></div>
                <div className='gameboard_card map'></div>
                <div className='gameboard_card sign'></div>
                <div className='gameboard_card sign'></div>
                <div className='gameboard_card jacket'></div>
                <div className='gameboard_card jacket'></div>
                <div className='gameboard_card compass'></div>
                <div className='gameboard_card compass'></div>
                <div className='gameboard_card gloves'></div>
                <div className='gameboard_card gloves'></div>
                <div className='gameboard_card backpack'></div>
                <div className='gameboard_card backpack'></div>
            </div>
        )
    }
}