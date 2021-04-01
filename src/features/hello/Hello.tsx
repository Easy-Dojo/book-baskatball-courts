import React, {useEffect} from "react";
import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {useMessageActions} from "./useMessageActions";
import {selectMessage} from "./messageSlice";

const Hello: React.FC = () => {
    const {data} = useTypedSelector(selectMessage)
    const {fetchMessage} = useMessageActions()

    useEffect(()=>{
        fetchMessage();
    },[])

    return <div><h1>{data}</h1></div>
};

export default Hello;
