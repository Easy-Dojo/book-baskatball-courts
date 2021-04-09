import {Form, TimePicker} from "antd";
import React from "react";
import {getUnavailableEndHours} from "./utils";
import {DateType, TIME_FORMAT} from "./type";
import moment from "moment";

interface EndTimePickerPickerProps {
    startTime: DateType
}

const EndTimePicker: React.FC<EndTimePickerPickerProps> = ({startTime}) => {
    return (<Form.Item
        label="EndTime"
        name="endTime"
        rules={[{required: true, message: "请选择结束时间！"}]}
    >
        <TimePicker
            showNow={false}
            bordered={false}
            format={TIME_FORMAT}
            inputReadOnly={true}
            hideDisabledOptions={true}
            disabled={!moment.isMoment(startTime)}
            disabledHours={() => getUnavailableEndHours(startTime)}
        />
    </Form.Item>)
}
export default EndTimePicker