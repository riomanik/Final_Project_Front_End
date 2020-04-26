import { shallow } from 'enzyme'
import { SignInTrainer } from '../../../login/SignInTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SignInTrainer />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

