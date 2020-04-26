import { shallow } from 'enzyme'
import { Error500 } from '../../../error/505'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Error500 />)
})

describe("Main Component", () => {
    it('should render', () => {

    });
})