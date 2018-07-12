import { shallow } from 'enzyme'
import React from 'react';
import LandingPage from '../LandingPage';

describe("<LandingPage/>", () => {
    it('renders correctly', () => {
        const wrapper = shallow(<LandingPage/>);
        expect(wrapper).toMatchSnapshot();
    })
})