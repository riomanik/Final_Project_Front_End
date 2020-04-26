import { shallow } from 'enzyme'
import { previousPaging, paging, nextPaging, paginationNgide, totalPages } from '../../../listClass/pagination'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow((<previousPaging /> , <paging /> , <nextPaging /> , <paginationNgide /> , <totalPages />))

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

