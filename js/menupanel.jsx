import React from "react";

export class MenuPanel extends React.Component {
    render() {
        return (
            <div className='menu_panel'>
                <h1 className='menu_panel--title'>Memory Game - collect your mountain equipment!</h1>
                <div className='menu_panel--results'>
                    <span>Time: {this.props.time}</span>
                    <span>Moves: {this.props.moves}</span>
                    <span className='menu_panel--new'>New game</span>
                </div>
            </div>
        )
    }
}