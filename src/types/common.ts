export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  token?: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IAdmin {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  address: string;
  email: string;
  contactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
