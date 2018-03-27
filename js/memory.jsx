import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { CircleLoader } from 'react-spinners';
import { GameBoard } from './gameboard.jsx';


document.addEventListener('DOMContentLoaded', () => {

    Modal.setAppElement('#app');

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }

        componentDidMount() {
            this.intervalId = setTimeout(() => this.setState({
                isLoading: false }), 1000);
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
                return <GameBoard/>
            }
        }
    }

    ReactDOM.render(<App />, document.getElementById('app'));
});