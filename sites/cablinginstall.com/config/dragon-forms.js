const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSubscribe', { omedasite: 'CIMNewpref' })
  .addForm('newsletterManage', { omedasite: 'CIMPrefPage' })
  .addForm('newsletterSignup', { omedasite: 'CIMNewpref', query: { pk: 'ARTWEB' } });

module.exports = config;
