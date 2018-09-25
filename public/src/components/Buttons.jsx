import React, { Component } from 'react'
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRoll } from '../actions/appAction';

class Buttons extends Component {
    constructor(props) {
        super(props);

        this['handleButtonClick'] = this['handleButtonClick'].bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newRoll) {
            this.props.rolls.unshift(nextProps.newRoll);
        }
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

    render() {
        return (
            <div className='col-sm-4'>
                <div onClick={() => this.handleButtonClick(4)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 4</div>
                <div onClick={() => this.handleButtonClick(6)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 6</div>
                <div onClick={() => this.handleButtonClick(8)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 8</div>
                <div onClick={() => this.handleButtonClick(10)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 10</div>
                <div onClick={() => this.handleButtonClick(12)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 12</div>
                <div onClick={() => this.handleButtonClick(20)} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll 20</div>
            </div>
        )
    }
}

Buttons.prototypes = {
    rolls: PropTypes.array.isRequired,
    newRoll: PropTypes.object
};

const mapStateToProps = state => ({
    rolls: state.rolls.rolls,
    newRoll: state.rolls.roll
});


export default connect(mapStateToProps, { createRoll })(Buttons);