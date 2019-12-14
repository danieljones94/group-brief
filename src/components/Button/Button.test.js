import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import expectExport from "expect";

describe("Button tests", () => {
  let component;
  let testFunction;
  let type;

  beforeEach(() => {
    testFunction = jest.fn();
    component = shallow(<Button type={type} />);
  });

  test("it should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("");
});
