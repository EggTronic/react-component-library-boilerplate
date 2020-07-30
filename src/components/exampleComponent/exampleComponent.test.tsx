import React from "react";
import { shallow } from "enzyme";

import ExampleComponent from "./exampleComponent";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  const renderWrapper = () => shallow(<ExampleComponent {...props} />);

  describe("Snapshots", () => {
    it("should match example string", () => {
      expect(renderWrapper().find('div').text()).toContain("This is an example");
    });
  });
});
