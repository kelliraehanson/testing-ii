import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button data-testid="strike-btn" onClick={props.addStrike}>Strike</button>
            <br />
            <br />
            <button data-testid="ball-btn" onClick={props.addBall}>Ball</button>
            <br />
            <br />
            <button data-testid="hit-btn" onClick={props.hit}>Hit</button>
            <br />
            <br />
            <button data-testid="foul-btn" onClick={props.foul}>Foul</button>
            
        
        </div>
    )
}

export default Dashboard; 