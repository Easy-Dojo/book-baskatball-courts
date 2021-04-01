import {bindActionCreators} from "redux";
import {useAppDispatch} from "../../app/hooks/useAppDispatch";
import {repositoriesActionCreators} from "./repositoriesSlice";


export const useRepositoriesActions = ()=>{
    const dispatch = useAppDispatch();

    return bindActionCreators(repositoriesActionCreators, dispatch)
};
