import { shallow } from 'enzyme'
import { ViewSaldo } from '../../../transaction/viewSaldo'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ViewSaldo />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

