import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render () {
        const { data } = this.props;
        return(
            <div>
                <h3>This is pure component</h3>
                data: {data}
            </div>
        )
    }
}

module.exports = PureComp;