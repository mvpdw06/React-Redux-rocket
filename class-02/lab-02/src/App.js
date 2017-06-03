import React, { Component } from 'react';

import SingleData from './SingleData';

const list = [
    {
        name: '蛋餅',
        type: 'eat'
    },
    {
        name: '漢堡',
        type: 'eat'
    },
    {
        name: '抓餅',
        type: 'eat'
    },
    {
        name: '奶茶',
        type: 'drink'
    },
    {
        name: '咖啡',
        type: 'drink'
    }
];

class App extends Component {
    render() {
        const warpList = list.map((data, index) => {
            return <SingleData  key={index} 
                                data={data} />
        })

        const filterDrinkList = list.filter((data) => {
            return data.type === 'drink';
        })

        const warpDrinkList = filterDrinkList.map((data, index) => {
            return <SingleData  key={index}
                                data={data} />
        })
        
        return (
            <div>
                <h2>這是一個複製 Component 的範例</h2>
                Map:
                <ul>
                    {warpList}
                </ul>
                Filter:
                <ul>
                    {warpDrinkList}
                </ul>
            </div>
        )
    }
}

module.exports = App;