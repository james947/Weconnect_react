import React from "react";
import {shallow} from "enzyme";
import LandingPage from "../../components/LandingPage/LandingPage";

describe("landing body", () => {
    it("it should render landingbody, navbar, footer ", () => {
        expect (
            shallow(<LandingPage/>).find("div.landing").exists()).toBe(true);
        
    })
})