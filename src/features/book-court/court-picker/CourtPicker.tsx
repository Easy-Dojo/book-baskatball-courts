import { Checkbox } from "antd";
import React from "react";
import {COURT_SUB_TYPE, CourtType} from "../service";

interface CourtPickerProp {
    courtName: string,
    data: [CourtType, CourtType]
}

const CourtPicker:React.FC<CourtPickerProp> = ({courtName, data})=>{
    return <div>
        <h3>{courtName}</h3>
        <Checkbox value={data[COURT_SUB_TYPE.LEFT].id} disabled={!data[COURT_SUB_TYPE.LEFT].isAvailable}>left</Checkbox>
        <Checkbox value={data[COURT_SUB_TYPE.RIGHT].id} disabled={!data[COURT_SUB_TYPE.RIGHT].isAvailable}>right</Checkbox>
    </div>
}

export default CourtPicker