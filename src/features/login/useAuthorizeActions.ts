import {bindActionCreators} from "redux";
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {authorizeActionCreators} from "./authorizeSlice";

export const useAuthorizeActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(authorizeActionCreators, dispatch)
};
