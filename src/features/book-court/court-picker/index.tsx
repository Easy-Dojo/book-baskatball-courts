import {Empty, notification, Spin} from "antd";
import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../app/hooks/useTypedSelector";
import {selectCourts} from "../courtsSlice";
import {CheckboxValueType} from "antd/lib/checkbox/Group";
import ConfirmButton from "./ConfirmButton";
import CourtContent from "./CourtContent";

const CourtSelectionBoard: React.FC = () => {
    const {data, loading, error} = useTypedSelector(selectCourts)
    const [selectedCourt, setSelectedCourt] = useState<Array<CheckboxValueType>>([]);

    const onSelectionChange = (checkedValue: Array<CheckboxValueType>) => {
        setSelectedCourt(checkedValue);
    }

    const onSubmit = () => {
        console.log(selectedCourt)
    }

    useEffect(() => {
        if (error) {
            notification.error({
                message: '查询时间错误',
                description: error,
            });
        }
    }, [error])

    return <Spin spinning={loading}>
        {
            data
                ? <>
                    <CourtContent courts={data.courts} onChange={onSelectionChange}/>
                    <ConfirmButton onSubmit={onSubmit}/>
                </>
                : <Empty/>
        }
    </Spin>;
}

export default CourtSelectionBoard