import { shallow } from 'enzyme'
import { VideoCall2 } from '../../../MainTrainer/VideoCall2'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<VideoCall2 />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

