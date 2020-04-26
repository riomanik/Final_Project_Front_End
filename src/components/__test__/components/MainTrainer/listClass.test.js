import { shallow } from 'enzyme'
import { ListClass } from '../../../MainTrainer/listClass'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ListClass />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

