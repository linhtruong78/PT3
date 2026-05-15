/**
 * PT3 Global Royal — office directory
 * ------------------------------------
 * Real-world contact details from the official brand collateral.
 * Order matches src/i18n/translations.js -> locations.items, so the same
 * index can be used to display localised city/country names alongside the
 * (non-translated) phones and addresses below.
 */

export const OFFICES = [
  {
    key: 'vancouver',
    role: 'Head Office',
    address: '655-8250 Manitoba St, Vancouver, BC V5X 0L6, Canada',
    phones: ['+1-778-444-6006', '+1-236-514-6006', '+1-672-288-8008'],
    email: 'info@araksagi.com',
  },
  {
    key: 'toronto',
    role: 'Second Office',
    address: 'Toronto, Ontario, Canada',
    phones: ['+1-548-468-6000', '+1-343-843-4000'],
    email: 'info@araksagi.com',
  },
  {
    key: 'abbotsford',
    role: 'Production Facility',
    address: 'Abbotsford, British Columbia, Canada',
    phones: ['+1-778-444-6006'],
    email: 'info@araksagi.com',
  },
  {
    key: 'dubai',
    role: 'Branch Office & UAE Production',
    address: 'Al Marjan Island, Ras Al Khaimah, United Arab Emirates',
    phones: ['+971-559-881-748', '+971-558-024-946', '+971-524-988-471'],
    email: 'info@araksagi.com',
  },
  {
    key: 'hcmc',
    role: 'Asia Regional Sales Office',
    address: 'HM Town, Floor 14, 412 Nguyen Thi Minh Khai, Ban Co Ward, Ho Chi Minh City, Vietnam',
    phones: ['+84-902-669-603', '+84-931-487-822'],
    email: 'info@araksagi.com',
  },
];

/** Primary brand contact channels. */
export const BRAND = {
  email: 'info@araksagi.com',
  website: 'www.araksagi.com',
  instagram: '@pt3globalroyal',
  instagramUrl: 'https://instagram.com/pt3globalroyal',
  tagline: 'A Legacy in Every Sip',
  ambassador: { name: 'Sophia', role: 'Global Ambassador' },
};
