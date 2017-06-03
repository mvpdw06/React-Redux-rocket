import React, { Component } from 'react';

const Receiver = ({ data, delegateFun }) => {
    return(
        <div onClick={() => delegateFun(2)}>
            {data}
        </div>
    )
}

module.exports = Receiver;