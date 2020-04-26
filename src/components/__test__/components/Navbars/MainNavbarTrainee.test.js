import { shallow } from 'enzyme'
import { MainNavbarTrainee } from '../../../Navbars/MainNavbarTrainee'
import React from 'react';
import 'jsdom-global/register';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<MainNavbarTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

