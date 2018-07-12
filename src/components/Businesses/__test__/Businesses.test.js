import { shallow } from 'enzyme'
import React from 'react';
import  Businesses  from '../';

describe("<Businesses/>", () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Businesses/>);
        expect(wrapper).toMatchSnapshot();
    })
})