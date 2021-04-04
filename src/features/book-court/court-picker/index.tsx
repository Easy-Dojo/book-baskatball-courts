import {Button, Checkbox, Empty, Form} from "antd";
import React from "react";
import {useTypedSelector} from "../../../app/hooks/useTypedSelector";
import {selectCourts} from "../courtsSlice";
import CourtPicker from "./CourtPicker";
import {CheckboxValueType} from "antd/lib/checkbox/Group";

const CourtSelectionBoard: React.FC = () => {
    const {data, loading, error} = useTypedSelector(selectCourts)

    const onChange = (checkedValue: Array<CheckboxValueType>) => {
        console.log(checkedValue)
    }

    if (!data) {
        return <Empty/>
    }

    const CourtContent = () =>
        <Checkbox.Group className="court-content" onChange={onChange}>
            {Object.keys(data.courts).map(key => <CourtPicker key={key} courtName={key} data={data.courts[key]}/>)}
        </Checkbox.Group>


    const Submit = () => (
        <Form.Item>
            <Button size="large" type="primary" shape="round">
                确认场地
            </Button>
        </Form.Item>
    );

    return <div>
        <CourtContent/>
        <Submit/>
    </div>;
}

export default CourtSelectionBoard