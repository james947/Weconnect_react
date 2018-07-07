import React from "react";
import {shallow} from "enzyme";
import Businesses from "../../components/Businesses";
import BusinessProfile from "../../components/BusinessProfile";

describe("should render the business profile", () => {
    it("it should render a  link", () => {
        expect (
            shallow(<BusinessProfile/>).find("div.Profilecard").exists()).toBe(true);
        
    })
})
