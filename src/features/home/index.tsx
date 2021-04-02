import React from "react";
import {Button} from "antd";
import {useHistory} from "react-router-dom";
import {Pages} from "../../app/routes";

const Home:React.FC = ()=>{
    const history = useHistory();

    return <div>
        <Button type="link" onClick={()=>history.push(Pages.BookCourt.path)}>定场</Button>
    </div>
}

export default Home