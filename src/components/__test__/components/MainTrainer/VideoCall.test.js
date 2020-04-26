import { shallow } from 'enzyme'
import { VideoCall } from '../../../MainTrainer/VideoCall'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<VideoCall />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

