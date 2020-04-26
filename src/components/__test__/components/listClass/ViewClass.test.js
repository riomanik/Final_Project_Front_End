import { shallow } from 'enzyme'
import { ViewClass } from '../../../listClass/ViewClass'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ViewClass />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

