import { shallow } from 'enzyme'
import { MainNavbarTrainer } from '../../../Navbars/MainNavbarTrainer'
import React from 'react';
import 'jsdom-global/register';
let wrapper;

beforeEach(() => {
    wrapper = shallow(<MainNavbarTrainer />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

