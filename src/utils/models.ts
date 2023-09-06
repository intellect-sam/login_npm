export interface LoginResponse {
  data: {
    admin: ISetAdmin;
    token: string;
  };
  message: string;
  success: boolean;
}

export interface ISetAdmin {
  surname: string;
  firstName: string;
  otherName: string;
  countryId: string;
  countryFlag: string;
  status: string;
  email: string;
  phoneNumber: string;
  deviceHasChanged: boolean;
  hasCreatedSecurityPin: boolean;
  hasCreatedTransactionPin: boolean;
  hasValidId: boolean;
  hasSetBiometrics: boolean;
  hasValidBvn: boolean;
  hasProfilePicture: boolean;
  hasWallet: boolean;
  hasValidatedMail: boolean;
  hasValidatedPhone: boolean;
  hasVirtualAccount: boolean;
  hasCompletedProfile: boolean;
}
