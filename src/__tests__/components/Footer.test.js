import React from "react";
import expect from "expect"
import {shallow} from "enzyme";
import Footer from "../../components/Footer/Footer";

describe("Footer section", () => {
    it("it should render a  link", () => {
        expect (
            shallow(<Footer/>).find("Link.footerCss").exists()).toBe(true);
        
    })
})