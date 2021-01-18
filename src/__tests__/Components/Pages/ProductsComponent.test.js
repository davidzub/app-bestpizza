import React from "react";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router';
import ProductsComponent from "../../../Components/Pages/ProductsComponent";
import thunk from "redux-thunk"

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("<ProductsComponent />", () => {
  let wrapper, store;
  const initialState = {
    validateLogin: false,
    listShops: null,
  };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}><MemoryRouter><ProductsComponent /></MemoryRouter></Provider>
    )
  });
  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
