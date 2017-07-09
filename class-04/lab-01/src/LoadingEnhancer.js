import React, { Component } from 'react';

const LoadingEnhancer = (ComposedComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const response = await this.props.fetchData;
            const data = await response.json();
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })            
        }
    }

    loadingMode = () => (
        <h1>Loading...</h1>
    )

    errorMode = () => (
        <h1>Oops! Something went wrong. Please try again</h1>
    )

    render() {
        const {
            loading,
            error,
            data
        } = this.state;
        if (loading) return this.loadingMode();
        else if (error) return this.errorMode();
        else return <ComposedComponent {...this.props} data={data} />
    }
}

module.exports = LoadingEnhancer;