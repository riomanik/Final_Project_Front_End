import { shallow } from 'enzyme'
import { MainPageTrainee } from '../../../MainTrainee/mainPageTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<MainPageTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

