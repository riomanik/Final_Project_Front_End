import { shallow } from 'enzyme'
import { ListTraineeByTrainer } from '../../../MainTrainer/ListTraineeByTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ListTraineeByTrainer />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

