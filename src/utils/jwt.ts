import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const decodedData = jwtDecode(token);
  return decodedData;
};
