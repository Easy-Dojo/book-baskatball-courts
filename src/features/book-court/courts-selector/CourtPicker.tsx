import React from 'react';
import { COURT_SUB_TYPE, CourtType } from '../service';
import LeftCourt from './LeftCourt';
import RightCourt from './RightCourt';

interface CourtPickerProp {
  courtName: string,
  data: [CourtType, CourtType],
}

const CourtPicker:React.FC<CourtPickerProp> = ({ courtName, data }) => (
  <div className="court-picker">
    <h3 className="court-name">{courtName}</h3>
    <div className="court">
      <LeftCourt
        value={data[COURT_SUB_TYPE.LEFT].id}
        disabled={!data[COURT_SUB_TYPE.LEFT].isAvailable}
      />
      <RightCourt
        value={data[COURT_SUB_TYPE.RIGHT].id}
        disabled={!data[COURT_SUB_TYPE.RIGHT].isAvailable}
      />
    </div>
  </div>
);

export default CourtPicker;
