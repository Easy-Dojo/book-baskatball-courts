import React, {useState} from "react";
import {Form} from "antd";
import DayPicker from "./DayPicker";
import StartTimePicker from "./StartTimePicker";
import EndTimePicker from "./EndTimePicker";
import {DateType} from "./type";
import FormSubmit from "./FormSubmit";
import {useBookCourtsActions} from "../useBookCourtsActions";

interface FormDataType {
    date: DateType,
    startTime: DateType,
    endTime: DateType
}

const ScheduledTime: React.FC = () => {
    const [form] = Form.useForm();
    const {queryCourts} = useBookCourtsActions()
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
        queryCourts({
            date: values.date?.format("YYYY-MM-DD"),
            startTime: values.startTime?.get("hours"),
            endTime: values.endTime?.get("hours"),
        })
    }

    return (
        <Form
            form={form}
            name="search-available-courts"
            layout="horizontal"
            onFinish={onSearchCourts}
            onValuesChange={onValuesChange}
        >
            <DayPicker />
            <StartTimePicker date={searchDate.date} />
            <EndTimePicker startTime={searchDate.startTime}/>
            <FormSubmit/>
        </Form>
    );
}

export default ScheduledTime