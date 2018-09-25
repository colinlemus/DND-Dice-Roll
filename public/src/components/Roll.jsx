import React, { Component } from 'react'
import Buttons from './Buttons';
import Results from './Results';

export default class Roll extends Component {
    render() {
        return (
            <div>
                <div className='jumbotron jumbotron-fluid bg-dark text-white'>
                    <div className='container'>
                        <h1 className='font-weight-bold text-center'>Dungeons & Dragons Dice Roll</h1>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <Buttons />
                        <Results />
                    </div>
                </div>
            </div>
        )
    }
}
