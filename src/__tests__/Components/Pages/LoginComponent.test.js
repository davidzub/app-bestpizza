import React from "react";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import LoginComponent from "../../../Components/Pages/LoginComponent";
import thunk from "redux-thunk"

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("<LoginComponent />", () => {
  let wrapper, store;
  const initialState = {
    validateLogin: false,
    listShops: null,
  };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}><LoginComponent /></Provider>
    )
  });
  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Validate element 'loginForm'", () => {
    expect(wrapper.find("#loginForm")).toHaveLength(1);
  });
  test("click button", () => {
    const button = wrapper.find('button');
    expect(button.text()).toBe("Iniciar sesión");
    button.simulate('click');
    /* expect(button.prop('disabled')).toBeTruthy();  */
  });
});
