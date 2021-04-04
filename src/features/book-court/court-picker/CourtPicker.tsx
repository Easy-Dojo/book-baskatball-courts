import { Checkbox } from "antd";
import React from "react";
import {CourtType} from "../service";

interface CourtPickerProp {
    courtName: string,
    data: [CourtType, CourtType]
}

const CourtPicker:React.FC<CourtPickerProp> = ({courtName, data})=>{
    return <div>
        <h3>{courtName}</h3>
        <Checkbox value={data[0].id} disabled={!data[0].isAvailable}>left</Checkbox>
        <Checkbox value={data[1].id} disabled={!data[1].isAvailable}>right</Checkbox>
    </div>
}

export default CourtPicker