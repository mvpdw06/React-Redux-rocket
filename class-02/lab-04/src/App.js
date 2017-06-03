import React, { Component } from 'react';

import NormalComponent from './NormalComponent';
import PureComp from './PureComp';
import WillNotUpdate from './WillNotUpdate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
    }
    changeState = () => {
        this.setState({
            data: this.state.data + 1
        })
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <h2>React Life Cycle and Pure Component</h2>
                <button onClick={(e) => this.changeState(e)}>Click to add state</button>
                <br />
                <NormalComponent data={data} />
                <WillNotUpdate data={data} />
                <PureComp data={data} />
            </div>
        )
    }
}

module.exports = App;