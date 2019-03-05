import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

discribe('<Display />', () => {
    it('displays strikes', () => {
        const { getByText } = render(<Display />);

        expect(getByTest(/strikes/i)).toBeInTheDocument();
    });

    it('displays balls', () => {
        const { getByText } = render(<Display />);

        expect(getByTest(/balls/i)).toBeInTheDocument();
    });
});