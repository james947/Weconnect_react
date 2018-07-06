import React from "react";
import {shallow} from "enzyme";
import Businesses from "../../components/Businesses";

describe("Footer section", () => {
    it("it should render businesses", () => {
        expect (
            shallow(<Businesses/>).find("Link.dropdown-item").exists()).toBe(true);
        
    })
})