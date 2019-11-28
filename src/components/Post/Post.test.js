import React from "react";
import Post from "./Post";
import { shallow } from "enzyme";

const mockData = {
  date: "12:00:00 AM",
  text: "Testing is for testers",
  type: "red"
};

describe("Post component Tests", () => {
  let component;
  //   let testFunction;
  //   let postStyle;

  beforeEach(() => {
    // testFunction = jest.fn();
    component = shallow(<Post postData={mockData} />);
    // postStyle = component.get(0).style;
  });

  test("there should be a p tag", () => {
    expect(component.find("p").length).toEqual(1);
  });

  test(" should render the data passed in as props", () => {
    expect(component.text()).toContain(mockData.text);
  });

  test(" postStyle should give red border in this example", () => {
    expect(mockData).toHaveProperty("type", "red");
    expect(mockData).toHaveProperty("date", "12:00:00 AM");
  });
});
