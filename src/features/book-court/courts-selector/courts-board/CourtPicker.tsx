import React from 'react';
import { CourtSubType, CourtType } from '../../service';
import LeftCourt from './LeftCourt';
import RightCourt from './RightCourt';

interface CourtPickerProp {
  courtName: string,
  data: [CourtType, CourtType],
  selectedSubCourtIds: string[];
}

const CourtPicker:React.FC<CourtPickerProp> = ({ courtName, data, selectedSubCourtIds }) => (
  <div className="court-picker">
    <h3 className="court-name">{courtName}</h3>
    <div className="court">
      <LeftCourt
        value={data[CourtSubType.LEFT].id}
        disabled={!data[CourtSubType.LEFT].isAvailable}
        selected={selectedSubCourtIds.includes(data[CourtSubType.LEFT].id)}
      />
      <RightCourt
        value={data[CourtSubType.RIGHT].id}
        disabled={!data[CourtSubType.RIGHT].isAvailable}
        selected={selectedSubCourtIds.includes(data[CourtSubType.RIGHT].id)}
      />
    </div>
  </div>
);

export default CourtPicker;
