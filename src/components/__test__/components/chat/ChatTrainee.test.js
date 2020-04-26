import { shallow } from 'enzyme'
import { ChatTrainee } from '../../../chat/ChatTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ChatTrainee />)
})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})