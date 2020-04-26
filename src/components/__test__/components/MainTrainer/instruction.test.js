import { shallow } from 'enzyme'
import { ScrollableTabsButtonAuto, TabPanel, a11yProps } from '../../../MainTrainer/instruction'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow((<ScrollableTabsButtonAuto /> , <TabPanel /> , <a11yProps />))

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

