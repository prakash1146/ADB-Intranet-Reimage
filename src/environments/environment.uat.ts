export const environment = {
  name: 'uat',
  production: false,
  apiBaseUrl: 'https://uat-api.adbintranet.com/api',
  logLevel: 'warn',
  msal : {
    clientId : 'acd3cd9f-1495-4bd7-bfa7-294f5b4194af',
    tenantId : '9495d6bb-41c2-4c58-848f-92e52cf3d640',
    redirectUri : typeof window !== 'undefined' ? window.location.origin : '/',
    postLogoutRedirectUri : typeof window !== 'undefined' ? window.location.origin : '/',
    apiScopes : ['User.Read'] as string[],
    protectedApiBase : '/api'
  }
};
