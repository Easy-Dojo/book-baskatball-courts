import React from "react";
import {useTypedSelector} from "../../../app/hooks/useTypedSelector";
import {selectCourts} from "../courtsSlice";

const CourtPicker: React.FC = () => {
    const courts = useTypedSelector(selectCourts)

    console.log(courts)

    return <div>CourtPicker</div>
}

export default CourtPicker