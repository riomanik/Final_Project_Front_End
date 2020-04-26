import { shallow } from 'enzyme'
import { ListClassTrainee } from '../../../MainTrainee/listClassTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ListClassTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

