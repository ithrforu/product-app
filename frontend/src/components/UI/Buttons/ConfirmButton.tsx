import React, { FC } from 'react';

type ConfirmButtonPropsT = {
  title: string;
  onClick?: (...args: any[]) => any
};

const ConfirmButton:FC<ConfirmButtonPropsT> = ({title, ...props}) => {
  return (
    <button {...props} className="py-2 px-4 border bg-yellow-400 block" >
      {title}
    </button>
  );
};

export default ConfirmButton;