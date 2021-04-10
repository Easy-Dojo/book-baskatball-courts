import { Checkbox, Empty } from 'antd';
import React from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import CourtPicker from './CourtPicker';
import { Courts } from '../courtsSlice';

interface CourtContentProps {
  onChange: (checkedValue: Array<CheckboxValueType>) => void;
  courts: Courts | undefined
}

const CourtContent: React.FC<CourtContentProps> = ({ onChange, courts }) => (
  <div className="court-content-box">
    {!courts && <Empty />}
    {courts && (
    <Checkbox.Group className="court-content" onChange={onChange}>
      {Object.keys(courts)
        .map((key) => <CourtPicker key={key} courtName={key} data={courts[key]} />)}
    </Checkbox.Group>
    )}
  </div>
);

export default CourtContent;
