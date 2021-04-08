import {Form, TimePicker} from "antd";
import React from "react";
import moment from "moment";
import {getUnavailableStartHours} from "./utils";
import {DateType, TIME_FORMAT} from "./type";

interface StartTimePickerProps {
    date: DateType
}

const StartTimePicker: React.FC<StartTimePickerProps> = ({date}) => {
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
            disabled={!moment.isMoment(date)}
            hideDisabledOptions={true}
            disabledHours={() => getUnavailableStartHours(moment(), date)}
        />
    </Form.Item>)
}
export default StartTimePicker