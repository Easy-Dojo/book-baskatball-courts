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
import bookCourtService from '../service'

interface FormDataType {
    date: DateType,
    startTime: DateType,
    endTime: DateType
}

const ScheduledTime: React.FC = () => {
    const [form] = Form.useForm();
    const [searchDate, setSearchDate] = useState<FormDataType>({
        date: undefined,
        startTime: undefined,
        endTime: undefined
    });

    const onValuesChange = (changedValues: any, allValues: FormDataType) => {
        if (changedValues.startTime) {
            form.setFieldsValue({...allValues, endTime: null})
        }
        setSearchDate(allValues);
    }

    const onSearchCourts = async (values: FormDataType) => {
        const queryData = {
            date: values.date?.format("YYYY-MM-DD"),
            startTime: values.startTime?.get("hours"),
            endTime: values.endTime?.get("hours"),
        }
         const courts = await bookCourtService.queryCourts(queryData);
        console.log(courts)
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