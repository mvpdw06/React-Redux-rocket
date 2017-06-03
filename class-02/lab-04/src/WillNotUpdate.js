import React, { Component } from 'react';

class WillNotUpdate extends Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                <h3>This is will not update component</h3>
                data: {data}
            </div>
        )
    }
}

module.exports = WillNotUpdate;