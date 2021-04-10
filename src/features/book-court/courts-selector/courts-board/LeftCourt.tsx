import React, { MouseEventHandler, useState } from 'react';
import LeftCourtDisabled from '../../../../assets/LeftCourtDisabled';
import LeftCourtSelected from '../../../../assets/LeftCourtSelected';
import LeftCourtAvailable from '../../../../assets/LeftCourtAvailable';

interface LeftCourtProps {
  value: string,
  disabled: boolean,
}

const LeftCourt: React.FC<LeftCourtProps> = ({ disabled, value }) => {
  const [selected, setSelected] = useState(false);

  const onClick:MouseEventHandler = () => {
    setSelected(!selected);
  };

  if (disabled) {
    return <LeftCourtDisabled />;
  }
  return (
    <div role="button" onClick={onClick}>
      {selected ? <LeftCourtSelected /> : <LeftCourtAvailable />}
    </div>
  );
};

export default LeftCourt;
