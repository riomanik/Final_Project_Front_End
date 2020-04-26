import { shallow } from 'enzyme'
import ExamplesNavbar from '../../../Navbars/ExamplesNavbar'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExamplesNavbar />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

