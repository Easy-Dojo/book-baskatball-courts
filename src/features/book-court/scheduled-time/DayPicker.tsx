import {DatePicker, Form} from "antd";
import React from "react";
import {Moment} from "moment";

interface DatePickerProps {
    disabledDate: (current: Moment) => boolean
}

const DatePicker: React.FC<DatePickerProps> = ({disabledDate}) => {
    return (<Form.Item
        label="Date"
        name="date"
        rules={[{required: true, message: "请选择日期！"}]}
    >
        <DatePickera
            allowClear={false}
            disabledDate={disabledDate}
        />
    </Form.Item>)
}
export default DatePicker