import { shallow } from 'enzyme'
import React from 'react';
import  EditForm from '../';

describe("<EditForm/>", () => {
    it('renders correctly', () => {
    const data = {
            businessname: '',
            description: '',
            location: '',
            category: ''
    }
      const location = {
          query: {
              business: {
                  state: data
              }
          }
      }   

        const wrapper = shallow(<EditForm onSubmit={()=>{}} onChange={()=>{}} location={location} state={{data:data}} />);
        expect(wrapper).toMatchSnapshot();
    })
})