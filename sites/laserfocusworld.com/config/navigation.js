const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/detectors-imaging', label: 'Detectors & Imaging' },
      { href: '/lasers-sources', label: 'Lasers & Sources' },
      { href: '/optics', label: 'Optics' },
      { href: '/fiber-optics', label: 'Fiber Optics' },
      { href: '/software-accessories', label: 'Software & Accessories' },
      { href: '/biooptics', label: 'BioOptics' },
      { href: '/test-measurement', label: 'Test & Measurement' },
      { href: 'https://www.industrial-lasers.com/', label: 'Industrial Lasers', target: '_blank' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: 'https://laserfocusworldinnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
      { href: 'https://www.marketplaceseminar.com/index.html', label: 'Seminar', target: '_blank' },
      { href: 'https://store.laserfocusworld.com/', label: 'Research', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://advancedtechnology.endeavorb2b.com/laser-focus-world/', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/detectors-imaging', label: 'Detectors & Imaging' },
        { href: '/lasers-sources', label: 'Lasers & Sources' },
        { href: '/optics', label: 'Optics' },
        { href: '/fiber-optics', label: 'Fiber Optics' },
        { href: '/software-accessories', label: 'Software & Accessories' },
        { href: '/biooptics', label: 'BioOptics' },
        { href: '/test-measurement', label: 'Test & Measurement' },
        { href: '/photonics-business', label: 'Photonics Business' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/blogs', label: 'Commentary' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/events', label: 'Events' },
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: 'https://laserfocusworldinnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
        { href: 'https://www.marketplaceseminar.com/index.html', label: 'L&P Market Seminar', target: '_blank' },
        { href: 'https://store.laserfocusworld.com/', label: 'Photonics Market Reports', target: '_blank' },
        { href: 'https://www.industrial-lasers.com/', label: 'Industrial Lasers', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://advancedtechnology.endeavorb2b.com/laser-focus-world/', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
