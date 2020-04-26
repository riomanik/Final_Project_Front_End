import { shallow } from 'enzyme'
import { CheckoutTopUp } from '../../../transaction/topUp'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CheckoutTopUp />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

