import { shallow } from 'enzyme'
import { VideoTrainer } from '../../../MainTrainer/videoTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<VideoTrainer />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

