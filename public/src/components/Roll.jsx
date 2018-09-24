import React, { Component } from 'react'
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRolls, createRoll } from '../actions/appAction'

class Roll extends Component {
    constructor(props) {
        super(props);

        this['handleButtonClick'] = this['handleButtonClick'].bind(this);
        this['handleDisplay'] = this['handleDisplay'].bind(this);
    }

    componentDidMount() {
        this.lookupInterval = setInterval(() => {
            this.props.fetchRolls();
        }, 500)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newRoll) {
            this.props.rolls.unshift(nextProps.newRoll);
        }
    }

    componentWillUnMount() {
        clearInterval(this.lookupInterval)
    }

    componentWillMount() {
        this.props.fetchRolls();
    }

    handleButtonClick(diceNumber) {
        let currentTime = moment().format('h:mm:ss A');
        let roll = Math.floor(Math.random() * diceNumber) + 1;

        let rolls = {
            roll: roll,
            number: 'd' + diceNumber,
            time: currentTime,
            username: localStorage.getItem('username')
        };

        this.props.createRoll(rolls);
    }

    handleDisplay() {
        if (this.props.rolls.length != 0) {
            return (
                <div>
                    {this.props.rolls.map(element => {
                        return (
                            <div>{element.roll} | {element.number} | {element.time} | {element.username} </div>
                        );
                    })}
                </div>

            );
        } else {
            return (
                <div>
                    No data!
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                    <div className="container">
                        <h1 className="font-weight-bold text-center">Dungeons & Dragons Dice Roll</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(4)}>Roll 4</button>
                            </div>
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(6)}>Roll 6</button>
                            </div>
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(8)}>Roll 8</button>
                            </div>
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(10)}>Roll 10</button>
                            </div>
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(12)}>Roll 12</button>
                            </div>
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom">
                                <button onClick={() => this.handleButtonClick(20)}>Roll 20</button>
                            </div>
                        </div>
                        <div className="col-sm-8 two-margin-bottom">
                            <div className="card-header text-center font-weight-bold border bg-secondary text-white">Results:</div>
                            <div className="card-body text-center border-left border-bottom border-right">
                                <div id="results">
                                    {this.handleDisplay()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Roll.prototypes = {
    fetchRolls: PropTypes.func.isRequired,
    rolls: PropTypes.array.isRequired,
    newRoll: PropTypes.object
};

const mapStateToProps = state => ({
    rolls: state.rolls.rolls,
    newRoll: state.rolls.roll
});


export default connect(mapStateToProps, { fetchRolls, createRoll })(Roll);