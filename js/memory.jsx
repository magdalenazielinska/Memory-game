import React from 'react';
import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
import { CircleLoader } from 'react-spinners';
import { GameBoard } from './gameboard.jsx';

document.addEventListener('DOMContentLoaded', () => {

    class MenuPanel extends React.Component {
        render() {

            return (
                <div className='menu_panel'>
                    <h1 className='menu_panel--title'>Memory Game - collect your mountain equipment!</h1>
                    <div className='menu_panel--results'><span>Time: 00:00:00</span> <span>Moves: 0</span></div>
                </div>
            )
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }

        componentDidMount() {
            this.intervalId = setTimeout(() => this.setState({
                isLoading: false }), 1500);
        }

        componentWillUnmount() {
            clearInverval(this.intervalId);
        }

        render() {

            if (this.state.isLoading) {
                return <div className='loader'>
                    <CircleLoader
                        color={'#737373'}
                        loading={this.state.isLoading}
                        size={100}
                    />
                </div>
            } else {
                return <div>
                    <MenuPanel/>
                    <GameBoard/>
                </div>
            }
        }
    }

    ReactDOM.render(<App />, document.getElementById('app'));


});