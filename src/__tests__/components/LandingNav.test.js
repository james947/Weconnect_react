import React from "react";
import {shallow} from "enzyme";
import LandingPage from "../../components/LandingPage/LandingPage";

describe("landingnavigation bar ", () => {
    it("it should render landingbody navbar  ", () => {
        expect (
            shallow(<LandingPage/>).find("div.landing").exists()).toBe(true);
        
    })
})