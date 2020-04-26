import { shallow } from 'enzyme'
import { ProfileTrainer } from '../../../profile/profileTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ProfileTrainer />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

