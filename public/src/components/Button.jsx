import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRoll } from '../actions/appAction';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps['newRoll']) {
            this.props.rolls.unshift(nextProps['newRoll']);
        }
    }

    handleButtonClick = (diceNumber) => {
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
            <div onClick={() => this.handleButtonClick(this['props']['diceNumber'])} className='card-header text-center font-weight-bold border bg-secondary text-white two-margin-bottom'>Roll {this['props']['diceNumber']}</div>
        )
    }
}

Button.prototypes = {
    rolls: PropTypes['array']['isRequired'],
    newRoll: PropTypes['object']
};

const mapStateToProps = state => ({
    rolls: state['rolls']['rolls'],
    newRoll: state['rolls']['roll']
});

export default connect(mapStateToProps, { createRoll })(Button);