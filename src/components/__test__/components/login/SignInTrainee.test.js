import { shallow } from 'enzyme'
import { SignInTrainee } from '../../../login/SignInTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SignInTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

