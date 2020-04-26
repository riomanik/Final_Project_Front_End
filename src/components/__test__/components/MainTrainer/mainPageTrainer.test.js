import { shallow } from 'enzyme'
import { MainPageTrainer } from '../../../MainTrainer/mainPageTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<MainPageTrainer />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

