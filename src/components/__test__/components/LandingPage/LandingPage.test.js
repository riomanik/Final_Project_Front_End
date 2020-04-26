import { shallow } from 'enzyme'
import { LandingPage } from '../../../landingPage/LandingPage'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<LandingPage />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})
