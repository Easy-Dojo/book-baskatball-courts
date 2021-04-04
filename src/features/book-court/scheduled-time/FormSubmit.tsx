import React from "react";
import {Button, Form, Tooltip} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const FormSubmit: React.FC = () => {
    return (<Form.Item>
        <Tooltip title="search">
            <Button htmlType="submit" size="small" type="primary" shape="circle" icon={<SearchOutlined/>}/>
        </Tooltip>
    </Form.Item>)
}

export default FormSubmit