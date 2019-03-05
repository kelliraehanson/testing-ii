import React from 'react';

const Dashboard = props => {

        return (
            <>
                <div className="display">
                <h1>Baseball!</h1>
                    <h3 data-testid="strikes">Strikes: {props.strikes}</h3>
                    <h3 data-testid="balls">Balls: {props.balls}</h3>
                </div>

            </>
        );

}

export default Dashboard; 