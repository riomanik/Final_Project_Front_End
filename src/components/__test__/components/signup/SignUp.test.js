import { shallow } from 'enzyme'
import { SignUp } from '../../../signup/SignUp'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SignUp />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

