import {Button, DatePicker, Form, TimePicker, Tooltip} from "antd";
import moment, {Moment} from "moment";
import {
    getUnavailableEndHours,
    getUnavailableStartHours,
    isUnavailableDate
} from "./utils";
import {SearchOutlined} from "@ant-design/icons";
import {useState} from "react";

type DateType = Moment | null | undefined;
const TIME_FORMAT = 'HH: 00';

interface SearchDataType {
    date: DateType,
    startTime: DateType,
    endTime: DateType
}

function ScheduledTime() {
    const [form] = Form.useForm();
    const [searchDate, setSearchDate] = useState<SearchDataType>({date: undefined, startTime: undefined, endTime: undefined});

    const onSearchCourts = (values: SearchDataType) => {
        console.log(values)
    }

    const onValuesChange = (changedValues: any, allValues: SearchDataType) => {
        if (changedValues.startTime) {
            form.setFieldsValue({...allValues, endTime: null})
        }
        setSearchDate(allValues);
    }

    return <div>
        <Form
            form={form}
            name="search-available-courts"
            layout="horizontal"
            onFinish={onSearchCourts}
            onValuesChange={onValuesChange}
        >
            <Form.Item
                label="Date"
                name="date"
                rules={[{required: true, message: "请选择日期！"}]}
            >
                <DatePicker
                    disabledDate={isUnavailableDate}
                />
            </Form.Item>
            <Form.Item
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
                    disabled={!moment.isMoment(searchDate.date)}
                    hideDisabledOptions={true}
                    disabledHours={() => getUnavailableStartHours(moment())}
                />
            </Form.Item>
            <Form.Item
                label="EndTime"
                name="endTime"
                rules={[{required: true, message: "请选择结束时间！"}]}
            >
                <TimePicker
                    showNow={false}
                    bordered={false}
                    format={TIME_FORMAT}
                    inputReadOnly={true}
                    disabled={!moment.isMoment(searchDate.startTime)}
                    hideDisabledOptions={true}
                    disabledHours={() => getUnavailableEndHours(form.getFieldValue("startTime"))}
                />
            </Form.Item>
            <Form.Item>
                <Tooltip title="search">
                    <Button htmlType="submit" size="small" type="primary" shape="circle" icon={<SearchOutlined/>}/>
                </Tooltip>
            </Form.Item>
        </Form>
    </div>;
}

export default ScheduledTime