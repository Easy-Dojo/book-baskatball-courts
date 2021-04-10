import React, { MouseEventHandler, useState } from 'react';
import RightCourtDisabled from '../../../../assets/RightCourtDisabled';
import RightCourtSelected from '../../../../assets/RightCourtSelected';
import RightCourtAvailable from '../../../../assets/RightCourtAvailable';

interface RightCourtProps {
  value: string,
  disabled: boolean
}

const RightCourt: React.FC<RightCourtProps> = ({ disabled }) => {
  const [selected, setSelected] = useState(false);

  const onClick:MouseEventHandler = () => {
    setSelected(!selected);
  };

  if (disabled) {
    return <RightCourtDisabled />;
  }
  return (
    <div role="button" onClick={onClick}>
      {selected ? <RightCourtSelected /> : <RightCourtAvailable />}
    </div>
  );
};

export default RightCourt;
