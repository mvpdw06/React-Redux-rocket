import React, { Component } from 'react';
import Receiver from './Receiver';

class App extends Component {
    constructor(props) {
        super(props);
        this.clickFun = this.clickFun.bind(this);
        //初始 state
        this.state = {
            data: 0
        }
    }
    clickFun(number) {
        // 如果沒有 bind，this 會是 null
        // setState
        this.setState({
            data: this.state.data + number
        });
    }
    render() {
        return (
            <div onClick={() => this.clickFun(1)}>
                Click to add 1
                <Receiver data="Click to add 2" delegateFun={this.clickFun} />
                state data: {this.state.data}
            </div>
        )
    }
}

module.exports = App;