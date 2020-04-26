import { shallow } from 'enzyme'
import Modal from '../../../modal/Modal'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Modal />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

