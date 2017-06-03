import React, { Component } from 'react';

import Receiver from './Receiver';

class App extends Component {
    render() {
        return (
            <div>
                <Receiver   name="賭聖" 
                            age={30} 
                            skill="特異功能"
                            gender="男"  
                            description="這裡有一張 A，只要我輕輕一搓，就變成了一張皺的 A，因為我還沒發功啊，我發功還能變出一副麻將出來呢！"
                            />
            </div>
        )
    }
}

module.exports = App;