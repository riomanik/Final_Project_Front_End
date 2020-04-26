import { shallow } from 'enzyme'
import { PrivateRoute } from '../../PrivateRoute'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<PrivateRoute />)
})

describe("Main Component", () => {
    it('should render', () => {

    });
})