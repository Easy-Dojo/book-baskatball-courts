import {Checkbox} from "antd";
import CourtPicker from "./CourtPicker";
import React from "react";
import {CheckboxValueType} from "antd/lib/checkbox/Group";
import {Courts} from "../courtsSlice";


interface CourtContentProps {
    onChange: (checkedValue: Array<CheckboxValueType>) => void;
    courts: Courts
}

const CourtContent:React.FC<CourtContentProps> = (props) => (
    <Checkbox.Group className="court-content" onChange={props.onChange}>
        {Object.keys(props.courts).map(key => <CourtPicker key={key} courtName={key} data={props.courts[key]}/>)}
    </Checkbox.Group>
);

export default CourtContent
