import { shallow } from 'enzyme'
import { Webcam2 } from '../../../signup/WebcamCapture'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Webcam2 />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

