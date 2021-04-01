import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as TypedSelectorHook from "../../app/hooks/useTypedSelector";
import * as MessageActions from "./useMessageActions";

import {render} from "@testing-library/react";
import Hello from "./Hello";
import {MessageState} from "./messageSlice";

describe("test RepositoryList Component", () => {
    const messageActions = {
        fetchMessage: jest.fn()
    };

    function mockSelector(mockData: MessageState) {
        const mockSelectorSpy = jest.spyOn(TypedSelectorHook, "useTypedSelector");
        mockSelectorSpy.mockReturnValue(mockData);
    }

    function mockActions(action: any) {
        const mockUseControllerSpy = jest.spyOn(MessageActions, "useMessageActions");
        mockUseControllerSpy.mockReturnValue(action);
    }

    function mockController(state: MessageState) {
        mockSelector(state)
        mockActions(messageActions)
    }

    it("should render Hello", async () => {
        const mockMessageState = {
            loading: false,
            error: undefined,
            data: "hello"
        }

        mockController(mockMessageState)

        const wrapper = render(<Hello />);

        const messageBox = wrapper.getByText("hello");
        expect(messageActions.fetchMessage).toHaveBeenCalledTimes(1)
        expect(messageBox).toBeInTheDocument();
        expect(messageBox).toContainHTML("<h1>hello</h1>");
    });

    it("should render error when render given error", async () => {
        const mockMessageState = {
            loading: false,
            error: "error",
            data: undefined
        }

        mockController(mockMessageState)

        const wrapper = render(<Hello />);

        const messageBox = wrapper.getByText("error");
        expect(messageActions.fetchMessage).toHaveBeenCalledTimes(1)
        expect(messageBox).toBeInTheDocument();
        expect(messageBox).toContainHTML("<span>error</span>");
    });

});
