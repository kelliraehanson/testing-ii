import React from 'react';

const Dashboard = props => {

        return (
            <>
                <div className="display">
                <h1>A LEAGUE OF THEIR OWN</h1>
                <h3>"Are you crying? Are you crying? There's no crying. There's no crying in baseball!"</h3>
            
                <img src="https://www.tvovermind.com/wp-content/uploads/2018/08/league1-750x450-750x450.jpg"
                alt="photo2"></img>

                    <h4 data-testid="strikes">Strikes: {props.strikes}</h4>
                    <h4 data-testid="balls">Balls: {props.balls}</h4>
                </div>

            </>
        );

}

export default Dashboard; 