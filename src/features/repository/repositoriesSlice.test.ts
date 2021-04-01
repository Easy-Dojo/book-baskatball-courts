import "@testing-library/jest-dom/extend-expect";
import {initialState, repositoriesActionCreators, repositoriesSlice} from "./repositoriesSlice";

describe("test repositories reducer", () => {

    it("should return correct data when trigger fetchRepositories given action is pending", () => {
        const action = repositoriesActionCreators.fetchRepositories.pending("fakeRequestId", "pending");

        const expectResult = {
            loading: true,
            error: undefined,
            data: []
        }
        expect(repositoriesSlice.reducer(initialState, action)).toStrictEqual(expectResult);
    });

    it("should return correct data when trigger fetchRepositories given action is fulfilled", () => {
        const action = repositoriesActionCreators.fetchRepositories.fulfilled(["react"], "fakeRequestId",'fulfilled');

        const expectResult = {
            loading: false,
            error: undefined,
            data: ['react']
        }
        expect(repositoriesSlice.reducer(initialState, action)).toStrictEqual(expectResult);
    });

    it("should return correct data when trigger fetchRepositories given action is rejected", () => {
        const action = repositoriesActionCreators.fetchRepositories.rejected(new Error("error"), "fakeRequestId",'fulfilled');

        const expectResult = {
            loading: false,
            error: "error",
            data: []
        }
        expect(repositoriesSlice.reducer(initialState, action)).toStrictEqual(expectResult);
    });
});
