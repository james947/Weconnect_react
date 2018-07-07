import React from "react";
import {shallow} from "enzyme";
import Businesses from "../../components/Businesses";

describe("businesses", () => {
    it("it should render a  link", () => {
        expect (
            shallow(<Businesses/>).find("div.col-md-10").exists()).toBe(true);
        
    })
})
