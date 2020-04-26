import { shallow } from 'enzyme'
import { DetailClass } from '../../../MainTrainee/detailClass'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<DetailClass />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

