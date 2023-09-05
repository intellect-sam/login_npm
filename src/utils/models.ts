export interface LoginResponse {
  data: {
    admin: ISetAdmin;
    token: string;
  };
  message: string;
  success: boolean;
}

export interface ISetAdmin {
  surname: 'Awode ';
  firstName: 'Tolulope ';
  otherName: 'Reuben';
  countryId: '254';
  countryFlag: 'https://oneequity.blob.core.windows.net/assets/visuals/flags/kenya.svg';
  status: 'MobileVerified';
  email: 'delighttechnosoft@gmail.com';
  phoneNumber: '757643274';
  deviceHasChanged: false;
  hasCreatedSecurityPin: true;
  hasCreatedTransactionPin: true;
  hasValidId: true;
  hasSetBiometrics: false;
  hasValidBvn: false;
  hasProfilePicture: false;
  hasWallet: true;
  hasValidatedMail: true;
  hasValidatedPhone: false;
  hasVirtualAccount: true;
  hasCompletedProfile: true;
}
