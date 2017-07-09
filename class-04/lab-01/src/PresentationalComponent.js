import React, { Component } from 'react';

import LoadingEnhancer from './LoadingEnhancer';

const PresentationalComponent = ({ data }) => (
    <div>
        <h1>My GitHub Page.({data.login})</h1>
        <ul>
            <li>ID: {data.id}</li>
            <li>URL: {data.url}</li>
            <li>Name: {data.name}</li>
            <li>Blog: {data.blog}</li>
        </ul>
    </div>
)

module.exports = LoadingEnhancer(PresentationalComponent);

// @LoadingEnhancer
// class PresentationalComponent extends Component {
//     render() {
//         const { data } = this.props;
//         return (
//             <div>
//                 <h1>My GitHub Page.({data.login})</h1>
//                 <ul>
//                     <li>ID: {data.id}</li>
//                     <li>URL: {data.url}</li>
//                     <li>Name: {data.name}</li>
//                     <li>Blog: {data.blog}</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// module.exports = PresentationalComponent;