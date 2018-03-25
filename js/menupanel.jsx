import React from "react";

export class MenuPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.time,
            points: this.props.points
        }
    }

    render() {
        return (
            <div className='menu_panel'>
                <h1 className='menu_panel--title'>Memory Game - collect your mountain equipment!</h1>
                <div className='menu_panel--results'>
                    <span>Time: {this.state.time}</span>
                    <span>Moves: {this.state.points}</span>
                    <span className='menu_panel--new'>New game</span>
                </div>
            </div>
        )
    }
}