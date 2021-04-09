import { Checkbox } from 'antd';
import React from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import CourtPicker from './CourtPicker';
import { Courts } from '../courtsSlice';

interface CourtContentProps {
  onChange: (checkedValue: Array<CheckboxValueType>) => void;
  courts: Courts
}

const CourtContent: React.FC<CourtContentProps> = ({ onChange, courts }) => (
  <Checkbox.Group className="court-content" onChange={onChange}>
    {Object.keys(courts)
      .map((key) => <CourtPicker key={key} courtName={key} data={courts[key]} />)}
  </Checkbox.Group>
);

export default CourtContent;
