import React from "react";
import { shallow } from "enzyme";
import InputComponent from "../../../Components/General/InputComponent";
describe("<InputComponent />", () => {
  let wrapper;
  const props = {
    placeholder:"",
    icon:"",
    type:"",
    disabled: false,
    onChange: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<InputComponent {...props}/>)
  });
  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("input change", () => {
    const event = {
        preventDefault() {},
        target: { value: 'the-value' }
      };
      const input = wrapper.find('input')
      input.simulate('change', event);
      expect(props.onChange).toBeCalledWith('the-value');
  });
});
