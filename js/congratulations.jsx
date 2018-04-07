import React from 'react';

export class Congratulations extends React.Component {

    handleClick = () => {
        if (typeof this.props.newGame() === 'function') {
            this.props.newGame();
        }
        if (typeof this.props.closeModal() === 'function') {
            this.props.closeModal();
        }
    }

    render() {
        let hours;
        let minutes;
        this.props.hours > 1 ? hours = ' hours' : hours = ' hour';
        this.props.minutes > 1 ? minutes = ' minutes' : minutes = ' minute';

        return (
            <section>
                <p className='game_finished--header'>
                    Congratulations! You are a winner!
                </p>
                <p className='game_finished--info'>
                    You made {this.props.moves} moves
                </p>
                <p className='game_finished--info'>
                    in {this.props.hours > 0 && this.props.hours + hours} {this.props.minutes > 0 && this.props.minutes + minutes} {this.props.seconds} seconds
                </p>
                <button
                    className='game_finished--again'
                    onClick={this.handleClick}>
                    Play again
                </button>
            </section>
        )
    }
}