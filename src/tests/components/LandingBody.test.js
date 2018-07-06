import React from "react";
import {shallow} from "enzyme";
import LandingBody from '../../components/LandingBody/LandingBody';

describe("landing body", () => {
    it("it should render button", () => {
        expect (
            shallow(<LandingBody/>).find("Link.btn").exists()).toBe(true);
        
    })
})