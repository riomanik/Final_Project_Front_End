import { shallow } from 'enzyme'
import { Subject } from '../../../../MainTrainer/subjectSelection/Subject'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Subject />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

