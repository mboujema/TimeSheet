import React from 'react';

export default class Timesheet extends React.Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2 className='heure'>Il est {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}