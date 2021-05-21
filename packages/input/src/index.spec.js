import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '.';
import { testPathIgnorePatterns } from '../../../jest.config';

describe('Input', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<input />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});