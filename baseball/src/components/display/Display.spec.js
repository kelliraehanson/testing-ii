import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('displays strikes', () => {
        const { getByText } = render(<Display />);

        expect(getByText(/strikes/i)).toBeInTheDocument();
    });

    it('displays balls', () => {
        const { getByText } = render(<Display />);

        expect(getByText(/balls/i)).toBeInTheDocument();
    });
});