import { Empty } from 'antd';
import React from 'react';
import CourtPicker from './CourtPicker';
import { Courts } from '../../courtsSlice';

interface CourtContentProps {
  courts: Courts | undefined
  selectedSubCourtIds: string[]
}

const CourtsBoard: React.FC<CourtContentProps> = ({ courts, selectedSubCourtIds }) => (
  <div className="court-content-box">
    {!courts && <Empty />}
    {courts && (
    <div className="court-content">
      {Object.keys(courts)
        .map((key) => (
          <CourtPicker
            key={key}
            courtName={key}
            data={courts[key]}
            selectedSubCourtIds={selectedSubCourtIds}
          />
        ))}
    </div>
    )}
  </div>
);

export default CourtsBoard;
