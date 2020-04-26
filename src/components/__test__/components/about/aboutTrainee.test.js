import { shallow } from 'enzyme'
import { AboutTrainee } from '../../../about/aboutTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<AboutTrainee />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})