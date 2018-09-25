import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
    render() {
        return (
            <div className='col-sm-4'>
                <Button diceNumber={4} />
                <Button diceNumber={6} />
                <Button diceNumber={8} />
                <Button diceNumber={10} />
                <Button diceNumber={12} />
                <Button diceNumber={20} />
            </div>
        )
    }
}

export default Buttons;