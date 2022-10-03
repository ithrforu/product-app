import React, { FC, useState } from 'react';
import Modal from './Modal';
import { ModalContext } from '../../../context/ModalContext';
import { ModalPropsT } from '../../../types'

const ModalProvider: FC<ModalPropsT> = ({title, children}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={[isModalVisible, setIsModalVisible]} >
      <Modal title={title} children={children}/>
    </ModalContext.Provider>
  );
};

export default ModalProvider;