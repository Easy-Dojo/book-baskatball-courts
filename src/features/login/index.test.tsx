import React from "react";
import "@testing-library/jest-dom/extend-expect";

import {render} from "@testing-library/react";
import LoginForm from "./index";

global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe("test Login Form", () => {
    it("should show tile", async () => {
        const wrapper = render(<LoginForm />);

        const tittleBox = wrapper.getByText("你好，");
        expect(tittleBox).toBeInTheDocument();
        expect(tittleBox).toContainHTML("<h3 class=\"login-layout-title\">你好，</h3>");
    });

    it("should do login when click button given validated username & pass", async () => {

    });
});
