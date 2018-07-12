import { shallow } from 'enzyme'
import React from 'react';
import { DeleteBusiness } from '../';

describe("<DeleteBusiness />", () => {
    it('renders correctly', () => {
        const wrapper = shallow(<DeleteBusiness />);
        expect(wrapper).toMatchSnapshot();
    })
})