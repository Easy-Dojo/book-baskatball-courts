import {Form, TimePicker} from "antd";
import React from "react";
import moment from "moment";
import {getUnavailableStartHours} from "./utils";

interface StartTimePickerProps {
    disabled: boolean
}

const TIME_FORMAT = 'HH: 00';

const StartTimePicker: React.FC<StartTimePickerProps> = ({disabled}) => {
    return (<Form.Item
        label="StartTime"
        name="startTime"
        rules={[{required: true, message: "请选择开始时间！"}]}
        shouldUpdate={true}
    >
        <TimePicker
            showNow={false}
            bordered={false}
            format={TIME_FORMAT}
            inputReadOnly={true}
            disabled={disabled}
            hideDisabledOptions={true}
            disabledHours={() => getUnavailableStartHours(moment())}
        />
    </Form.Item>)
}
export default StartTimePicker