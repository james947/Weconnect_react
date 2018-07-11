import React from "react";
import {shallow} from "enzyme";
import Businesses from "../../components/Businesses";

describe("<Businesses/>", () => {
    it("it should render a  div", () => {
        expect (
            shallow(<Businesses/>).find("div.col-md-10").exists()).toBe(true);
        
    })
    it("it should be wrapped in a container", () => {
        expect (
            shallow(<Businesses/>).find("div.container").exists()).toBe(true);
        
    })
})
