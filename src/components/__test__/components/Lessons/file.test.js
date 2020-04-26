import { shallow } from 'enzyme'
import { pdf } from '../../../Lessons/file'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<pdf />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

