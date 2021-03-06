import "jest-styled-components";
import { shallow } from "enzyme";
import React from "react";
import styled from "styled-components";
import Break from "./Break";

describe("<Break />", () => {
  it("should match the snapshot", () => {
    // act
    const result = shallow(<Break />);

    // assert
    expect(result).toMatchSnapshot();
  });
});
