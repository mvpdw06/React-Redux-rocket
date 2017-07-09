import React, { Component } from 'react';

class PureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = async () => {
        const response = await fetch('https://api.github.com/users/mvpdw06');
        const user = await response.json();
        this.setState({
            user,
            loading: false
        })
    }

    loadingMode = () => (
        <h1>Loading...</h1>
    )

    normalMode = (user) => (
        <div>
            <h1>My GitHub Page.({user.login})</h1>
            <ul>
                <li>ID: {user.id}</li>
                <li>URL: {user.url}</li>
                <li>Name: {user.name}</li>
                <li>Blog: {user.blog}</li>
            </ul>
        </div>
    )
    
    render() {
        const {
            loading,
            user
        } = this.state;
        if (loading) return this.loadingMode();
        else return this.normalMode(user);
    }
}

module.exports = PureComponent;