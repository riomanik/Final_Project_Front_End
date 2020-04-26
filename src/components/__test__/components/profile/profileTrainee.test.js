import { shallow } from 'enzyme'
import { ProfileTrainee } from '../../../profile/profileTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ProfileTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

