import {RESULTS} from 'react-native-permissions';

export type TUsePermissionsReturnType = {
  isError?: boolean;
  type: (typeof RESULTS)[keyof typeof RESULTS];
  errorMessage?: string;
};

export interface ICameraScannerProps {
  setIsCameraShown: (value: boolean) => void;
  onReadCode: (value: string) => void;
}

export interface AuthData {
  name?:string;
  email: string;
  phoneNumber?:string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  user: {
    userId?: string;
    name?: string;
    email?: string;
    phoneNumber?:string;
  };
}

export interface ErrorResponse {
  message: string;
}
