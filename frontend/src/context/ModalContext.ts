import { createContext } from 'react';
import { ModalContextT } from '../types';

export const ModalContext = createContext<ModalContextT>([false, () => {}]);