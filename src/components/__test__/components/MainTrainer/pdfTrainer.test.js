import { shallow } from 'enzyme'
import { pdfTrainer } from '../../../MainTrainer/pdfTrainer'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<pdfTrainer />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

