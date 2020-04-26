import { shallow } from 'enzyme'
import { Checkout } from '../../../MainTrainer/checkout'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Checkout />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

