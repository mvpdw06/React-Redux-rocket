import React, { Component } from 'react';

class NormalComponent extends Component {
    render() {
        const { data } = this.props;
        return(
            <div>
                <h3>This is normal component</h3>
                data: {data}
            </div>
        )
    }
}

module.exports = NormalComponent;