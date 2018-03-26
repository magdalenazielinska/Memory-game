import React from "react";

export class MenuPanel extends React.Component {
    render() {
        return (
            <div className='menu_panel'>
                <h1 className='menu_panel--title'>Memory Game - collect your mountain equipment!</h1>
                <div className='menu_panel--results'>
                    <span>
                        {`${this.props.hours > 9 ? this.props.hours : '0'+this.props.hours}:${this.props.minutes > 9 ? this.props.minutes : '0'+this.props.minutes}:${this.props.seconds > 9 ? this.props.seconds : '0'+this.props.seconds}`}
                    </span>
                    <span>Moves: {this.props.moves}</span>
                    <span className='menu_panel--new'>New game</span>
                </div>
            </div>
        )
    }
}