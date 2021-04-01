import {bindActionCreators} from "redux";
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {messageActionCreators} from "./messageSlice";

export const useMessageActions = ()=>{
    const dispatch = useAppDispatch();
    return bindActionCreators(messageActionCreators, dispatch)
};
