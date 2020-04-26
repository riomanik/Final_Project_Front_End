import { shallow } from 'enzyme'
import { TrainerLesson } from '../../../MainTrainer/trainerLesson'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<TrainerLesson />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

