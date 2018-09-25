import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRolls } from '../actions/appAction';

class Results extends Component {
    constructor(props) {
        super(props);

        this['handleDisplay'] = this['handleDisplay'].bind(this);
    }

    componentDidMount() {
        this.lookupInterval = setInterval(() => {
            this.props.fetchRolls();
        }, 500)
    }

    componentWillUnMount() {
        clearInterval(this.lookupInterval)
    }

    componentWillMount() {
        this.props.fetchRolls();
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
            <div className='col-sm-8 two-margin-bottom'>
                <div className='card-header text-center font-weight-bold border bg-secondary text-white'>Results:</div>
                <div className='card-body text-center border-left border-bottom border-right'>
                    <div id='results'>
                        {this.handleDisplay()}
                    </div>
                </div>
            </div>
        )
    }
}

Results.prototypes = {
    fetchRolls: PropTypes.func.isRequired,
    rolls: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    rolls: state.rolls.rolls,
});


export default connect(mapStateToProps, { fetchRolls })(Results);