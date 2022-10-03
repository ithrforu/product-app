import React, { FC } from 'react';

type CancelButtonData = {
  title: string
  onClick?: (...args: any[]) => any
};

const CancelButton:FC<CancelButtonData> = ({title, ...props}) => {
  return (
    <button {...props} type="button" className="py-2 px-4 border bg-blue-400 block">
      {title}
    </button>
  );
};

export default CancelButton;