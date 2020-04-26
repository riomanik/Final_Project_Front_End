import { shallow } from 'enzyme'
import { Error404 } from '../../../error/404'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Error404 />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})