interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Operations Staff',
    'Car Manager',
    'Customer',
    'Administrator',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read company details', 'Read car details', 'Read booking details', 'Read location details'],
  ownerAbilities: [
    'Manage new_table',
    'Manage user',
    'Manage company',
    'Manage car',
    'Manage booking',
    'Manage location',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/32f2fb63-da1b-4ce0-b61a-42b5edaa7b76',
};
