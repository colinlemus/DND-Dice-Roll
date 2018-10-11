import React, { Component } from 'react';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import Roll from './components/Buttons';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Roll />
                </div>
            </Provider>
        );
    }
}

export default App;