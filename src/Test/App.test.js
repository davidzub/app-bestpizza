import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallow(
        <App />
    );
  });
  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Validate element 'wrapper'", () => {
    expect(wrapper.find(".wrapper")).toHaveLength(1);
  });
});
