import React from 'react';

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <div className="display">
                <h1>Baseball!</h1>
                    <div>Strikes: {`${this.props.strikes}`}</div>
                    <div>Balls: {`${this.props.balls}`}</div>
                    {/* <div>Hits: {`${this.props.hits}`}</div>
                    <div>Fouls: {`${this.props.fouls}`}</div> */}
                </div>

            </>
        );
    }

}

export default Dashboard; 