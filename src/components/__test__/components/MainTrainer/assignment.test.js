import { shallow } from 'enzyme'
import { Assignment } from '../../../MainTrainer/assignment'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow((<Assignment />))

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

