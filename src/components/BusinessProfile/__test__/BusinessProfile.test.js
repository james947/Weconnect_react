import { shallow } from 'enzyme'
import React from 'react';
import  BusinessProfile  from '../';

describe("<BusinessProfile/>", () => {
    it('renders correctly', () => {
        const wrapper = shallow(<BusinessProfile state={{data: {}, reviews: {}}}/>);
        expect(wrapper).toMatchSnapshot();
    })
})