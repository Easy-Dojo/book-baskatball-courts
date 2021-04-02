import React from "react";
import "@testing-library/jest-dom/extend-expect";

import {render} from "@testing-library/react";
import LoginForm from "./index";
import * as MockHooks from "./hooks";

global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe("test Login Form", () => {
    function mockHooks(actions: any, isLoading: boolean) {
        const mockActionsSpy = jest.spyOn(MockHooks, "useAuthorizeActions");
        mockActionsSpy.mockReturnValue(actions);

        const mockStateLoadingSpy = jest.spyOn(MockHooks, "useLoginStateLoading");
        mockStateLoadingSpy.mockReturnValue(isLoading);
    }

    it("should show tile", async () => {
        const mockActions = {
            doLogin: jest.fn()
        }
        mockHooks(mockActions, true)

        const wrapper = render(<LoginForm />);

        const tittleBox = wrapper.getByText("你好，");
        expect(tittleBox).toBeInTheDocument();
        expect(tittleBox).toContainHTML("<h3 class=\"login-layout-title\">你好，</h3>");
    });

    it("should do login when click button given validated username & pass", async () => {

    });
});
