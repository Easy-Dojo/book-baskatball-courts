import {DatePicker, Form} from "antd";
import React from "react";
import {Moment} from "moment";

interface DatePickerProps {
    disabledDate: (current: Moment) => boolean
}

const DayPicker: React.FC<DatePickerProps> = ({disabledDate}) => {
    return (<Form.Item
        label="Date"
        name="date"
        rules={[{required: true, message: "请选择日期！"}]}
    >
        <DatePicker
            allowClear={false}
            disabledDate={disabledDate}
        />
    </Form.Item>)
}
export default DayPicker