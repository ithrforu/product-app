import { createContext } from 'react';
import { AuthContextT } from '../types';

export const AuthContext = createContext<AuthContextT>([false, () => {}]);