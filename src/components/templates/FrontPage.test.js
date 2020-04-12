import React from "react";
import { shallow, mount } from "enzyme";
import FrontPage from "./FrontPage";

const items = [
  {
    num_comments: 110,
    upvotes: 10,
    objectID: 1234,
    url: "www.test.com",
  },
];

let wrapped = shallow(<FrontPage hits={items} />);

describe("NewsItem", () => {
  it("should render the FrontPage Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the heading title", () => {
    wrapped = mount(<FrontPage hits={items} />);
    expect(wrapped.find(".comments").text()).toEqual("110");
  });
});
