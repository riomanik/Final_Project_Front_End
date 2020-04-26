import { shallow } from 'enzyme'
import { ListTraineeTask } from '../../../AssignmentTrainer/ListTraineeTask'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ListTraineeTask />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})