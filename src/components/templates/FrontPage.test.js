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

const props = {
  hits: items,
  router: {
    query: {
      page: 0,
    },
  },
};

let wrapped = shallow(<FrontPage {...props} />);

describe("NewsItem", () => {
  it("should render the FrontPage Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the heading title", () => {
    wrapped = mount(<FrontPage {...props} />);
    expect(wrapped.find(".comments").text()).toEqual("110");
  });
});
