import { shallow } from 'enzyme'
import React from 'react';
import  {ReviewsDisplay}   from '../';

describe("<ReviewsDisplay/>", () => {
    it('renders correctly', () => {
        const reviews = [];
        const wrapper = shallow(<ReviewsDisplay state={ reviews } />);
        expect(wrapper).toMatchSnapshot();
    })
})