import React from "react";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import ShopsComponent from "../../Pages/ShopsComponent";
import thunk from "redux-thunk"

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("<ShopsComponent />", () => {
  let wrapper, store;
  const initialState = {
    validateLogin: false,
    listShops: null,
  };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}><ShopsComponent /></Provider>
    )
  });
  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
