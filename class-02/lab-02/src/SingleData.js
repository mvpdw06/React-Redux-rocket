import React , { Component } from 'react';

const SingleData = ({ data }) => {
    return(
        <li>
            name: {data.name}, type: {data.type}
        </li>
    )
}

module.exports = SingleData;