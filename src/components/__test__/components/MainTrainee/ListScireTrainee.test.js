import { shallow } from 'enzyme'
import { ListScoreTrainee } from '../../../MainTrainee/ListScoreTrainee'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ListScoreTrainee />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

