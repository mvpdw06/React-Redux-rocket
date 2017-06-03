import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Receiver = ({ name, age, gender, tel, skill, description }) => {
    return (
        <div>
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 style={{ fontSize: '-webkit-xxx-large' }} className="mdl-card__title-text">{name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <ul>
                        <li>年齡: {age}</li>
                        <li>性別: {gender}</li>
                        <li>技能: {skill}</li>
                        <li>簡介: {description}</li>
                        <li>電話: {tel}</li>
                    </ul>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        與{name}聯繫
                    </a>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

Receiver.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
};

Receiver.defaultProps = {
    tel: '香港 3345678，十點以後不要打過來，因為我睡拉！'
};

module.exports = Receiver;