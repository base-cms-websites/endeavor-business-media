const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/leadership', label: 'Leadership' },
      { href: '/apparatus', label: 'Apparatus' },
      { href: '/rescue', label: 'Rescue' },
      { href: '/safety-health', label: 'Safety Health' },
      { href: '/operations-training', label: 'Ops & Training' },
      { href: '/careers-education', label: 'Careers & Edu' },
      { href: '/prevention-investigation', label: 'Prevention & Investigation' },
      { href: '/tech-comm', label: 'Tech & Comm' },
      { href: '/stations', label: 'Stations' },
    ],
  },
  secondary: {
    items: [
      { href: 'https://forums.firehouse.com', label: 'Forums', target: '_blank' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: '/magazine', label: 'In Print' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/covid-19', label: 'COVID-19' },
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
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/leadership', label: 'Leadership' },
        { href: '/apparatus', label: 'Apparatus' },
        { href: '/rescue', label: 'Rescue' },
        { href: '/safety-health', label: 'Safety Health' },
        { href: '/operations-training', label: 'Operations & Training' },
        { href: '/careers-education', label: 'Careers & Education' },
        { href: '/prevention-investigation', label: 'Prevention & Investigation' },
        { href: '/tech-comm', label: 'Tech & Comm' },
        { href: '/stations', label: 'Stations' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/careers-education/jobs', label: 'Jobs' },
        { href: 'https://forums.firehouse.com', label: 'Forums', target: '_blank' },
        { href: '/magazine', label: 'In Print' },
        { href: '/shiftcalendar', label: 'Shift Calendar' },
        { href: '/lodds', label: 'LODDs' },
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: '/40th-anniversary', label: '40th Anniversary' },
        { href: '/valor-awards', label: 'Valor Awards' },
        { href: '/run-surveys', label: 'Run Surveys' },
        { href: '/industry-insights', label: 'Industry Insights' },
        { href: '/quick-chat-videos', label: 'Quick Chat Videos' },
        { href: '/manufacturers-corner', label: 'Manufacturer\'s Corner' },
        { href: '/podcast', label: 'Podcasts' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: 'https://www.firehouseexpo.com/', label: 'Firehouse Expo', target: '_blank' },
        { href: 'https://www.fhstationdesign.com/', label: 'Station Design', target: '_blank' },
        { href: '/page/submissions', label: 'Submissions' },
        { href: '/events', label: 'Events' },
        { href: '/historical-incidents', label: 'Historical Incidents' },
        { href: '/special-content', label: 'Special Content' },
        { href: '/videos', label: 'Videos' },
        { href: 'https://cygnuscorporate.wufoo.com/forms/msifezv1jvw2kd/', label: 'Product Submission Form', target: '_blank' },
        { href: 'https://cygnuscorporate.wufoo.com/forms/m1kqij91xw16l1/', label: 'Company Submission Form', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
