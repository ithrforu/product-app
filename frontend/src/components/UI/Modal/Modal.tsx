import React, { FC, useContext, useEffect } from 'react';
import { ModalPropsT } from '../../../types'
import { ModalContext } from '../../../context/ModalContext';
import CloseIcon from '@mui/icons-material/Close';

const Modal:FC<ModalPropsT> = ({title, children}) => {
  const [isModalVisible, setIsModalVisible] = useContext(ModalContext);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if(isModalVisible) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  });

  return (
    <>
      {
        isModalVisible
        &&
          <div
            className="fixed z-10 bg-black/50 top-0 right-0 left-0 bottom-0 z-5"
            onClick={handleClose}
            onKeyUp={e => { if(e.key === 'Escape') handleClose() }}
          >
            <div
              className="w-[500px] p-5 rounded bg-white absolute z-10 top-10 left-1/2 -translate-x-1/2 flex flex-col"
              onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
              <CloseIcon className="cursor-pointer self-end" onClick={handleClose}/>
              <div>
                <h2 className="text-center mb-2 text-xl">{title}</h2>
                {children}
              </div>
            </div>
          </div>
      }
      <div>
        <button
          className="block mx-auto px-4 py-2 border bg-yellow-400"
          onClick={() => setIsModalVisible(true)}
        >{title}</button>
      </div>

    </>
  );
};

export default Modal;