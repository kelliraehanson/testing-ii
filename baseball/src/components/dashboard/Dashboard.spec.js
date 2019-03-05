import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('displays strikes button', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByTestId('strike-btn')).toBeInTheDocument();
    });

    it('displays ball button', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByTestId('ball-btn')).toBeInTheDocument();
    });


    it('displays foul button', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByTestId('foul-btn')).toBeInTheDocument();
    });

    it('displays hit button', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByTestId('hit-btn')).toBeInTheDocument();
    });

    it('increments ball count by 1', () => { 
        const { getByTestId, getByText } = render(<Dashboard />);
        const button = getByTestId('ball-btn');
        const ballDisplayText = getByText(/balls/i).textContent;
        fireEvent.click(button);
        expect(ballDisplayText).toHaveTextContent(/Balls: 1/);
        fireEvent.click(button);
        expect(ballDisplayText).toHaveTextContent(/Balls: 2/);
        fireEvent.click(button);
        expect(ballDisplayText).toHaveTextContent(/Balls: 3/);
        fireEvent.click(button);
        expect(ballDisplayText).toHaveTextContent(/Balls: 0/);

    })


});