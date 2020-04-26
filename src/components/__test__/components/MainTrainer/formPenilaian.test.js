import { shallow } from 'enzyme'
import { FormPenilaian } from '../../../MainTrainer/formPenilaian'
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<FormPenilaian />)

})

describe("Main Component", () => {
    it('should render', () => {
        // const buttonContainer = wrapper.find('Button');
        // expect(buttonContainer).toHaveLength(1);
    });
})

