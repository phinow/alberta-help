export const URLS = {
  SIGN_IN: 'https://account.alberta.ca/ui/sign-in',
  CREATE_ACCOUNT: 'https://account.alberta.ca/ui/sign-in/create-new-account',
  RESET_PASSWORD: 'https://account.alberta.ca/ui/account/reset-password',
  ACCOUNT_HOME: 'https://account.alberta.ca',
  ACCOUNT_INFO: 'https://www.alberta.ca/alberta-ca-account-for-personal-use',
  ACCOUNT_CONTACT: 'https://www.alberta.ca/alberta-ca-account-contact',
  MYHEALTH_RECORDS: 'https://myhealth.alberta.ca/myhealthrecords',
  MYHEALTH_HOME: 'https://myhealth.alberta.ca',
  MYHEALTH_HELP: 'https://myhealth.alberta.ca/help/KB/technical-problems',
  MYCHART_LOGIN: 'https://myahsconnect.albertahealthservices.ca/MyChartPRD/Authentication/Login',
  MYCHART_INFO: 'https://www.albertahealthservices.ca/cis/page15448.aspx',
} as const;

export const PHONE_NUMBERS = {
  ALBERTA_ACCOUNT: { label: 'Alberta.ca Account Support', phone: '1-844-643-2789' },
  MYCHART: { label: 'MyChart Support', phone: '1-844-401-4016' },
  HEALTH_LINK: { label: 'Health Link', phone: '811' },
} as const;

export const TIMING = {
  LOCKOUT_ATTEMPTS: 5,
  LOCKOUT_WINDOW_MINUTES: 30,
  LOCKOUT_DURATION_MINUTES: 15,
  VERIFICATION_CODE_DAYS: 10,
  VERIFICATION_DEADLINE_DAYS: 30,
  ID_EXPIRY_GRACE_MONTHS: 6,
} as const;
