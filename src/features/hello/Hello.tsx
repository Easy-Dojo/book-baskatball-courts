import React, {useEffect} from "react";
import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {useMessageActions} from "./useMessageActions";
import {selectMessage} from "./messageSlice";

const Hello: React.FC = () => {
    const {data, error} = useTypedSelector(selectMessage)
    const {fetchMessage} = useMessageActions()

    useEffect(()=>{
        fetchMessage();
    },[])

    console.log(error)
    return <div>
        <h1>{data}</h1>
        <span>{error}</span>
    </div>
};

export default Hello;
