import React from "react";
import {Form} from "antd";
import moment from "moment";
import {unavailableDate} from "./utils";
import {useState} from "react";
import DayPicker from "./DayPicker";
import StartTimePicker from "./StartTimePicker";
import EndTimePicker from "./EndTimePicker";
import {DateType} from "./type";
import FormSubmit from "./FormSubmit";

interface SearchDataType {
    date: DateType,
    startTime: DateType,
    endTime: DateType
}

const ScheduledTime: React.FC = () => {
    const [form] = Form.useForm();
    const [searchDate, setSearchDate] = useState<SearchDataType>({
        date: undefined,
        startTime: undefined,
        endTime: undefined
    });

    const onSearchCourts = (values: SearchDataType) => {
        console.log(values)
    }

    const onValuesChange = (changedValues: any, allValues: SearchDataType) => {
        if (changedValues.startTime) {
            form.setFieldsValue({...allValues, endTime: null})
        }
        setSearchDate(allValues);
    }

    return (
        <Form
            form={form}
            name="search-available-courts"
            layout="horizontal"
            onFinish={onSearchCourts}
            onValuesChange={onValuesChange}
        >
            <DayPicker disabledDate={unavailableDate}/>
            <StartTimePicker disabled={!moment.isMoment(searchDate.date)}/>
            <EndTimePicker disabled={!moment.isMoment(searchDate.startTime)} startTime={searchDate.startTime}/>
            <FormSubmit/>
        </Form>
    );
}

export default ScheduledTime