const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'HPN' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('sourcing-logistics', [
    { name: 'lb1', templateName: 'LB', path: 'sourcing-logistics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'sourcing-logistics/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'sourcing-logistics/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'sourcing-logistics/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'sourcing-logistics/load-more' },
    { name: 'reskin', path: 'sourcing-logistics/reskin' },
  ])
  .setAliasAdUnits('sterile-processing', [
    { name: 'lb1', templateName: 'LB', path: 'sterile-processing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'sterile-processing/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'sterile-processing/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'sterile-processing/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'sterile-processing/load-more' },
    { name: 'reskin', path: 'sterile-processing/reskin' },
  ])
  .setAliasAdUnits('surgical-critical-care', [
    { name: 'lb1', templateName: 'LB', path: 'surgical-critical-care/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'surgical-critical-care/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'surgical-critical-care/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'surgical-critical-care/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'surgical-critical-care/load-more' },
    { name: 'reskin', path: 'surgical-critical-care/reskin' },
  ])
  .setAliasAdUnits('patient-satisfaction', [
    { name: 'lb1', templateName: 'LB', path: 'patient-satisfaction/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'patient-satisfaction/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'patient-satisfaction/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'patient-satisfaction/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'patient-satisfaction/load-more' },
    { name: 'reskin', path: 'patient-satisfaction/reskin' },
  ])
  .setAliasAdUnits('infection-prevention', [
    { name: 'lb1', templateName: 'LB', path: 'infection-prevention/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'infection-prevention/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'infection-prevention/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'infection-prevention/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'infection-prevention/load-more' },
    { name: 'reskin', path: 'infection-prevention/reskin' },
  ])
  .setAliasAdUnits('evs-facility-services', [
    { name: 'lb1', templateName: 'LB', path: 'evs-facility-services/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'evs-facility-services/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'evs-facility-services/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'evs-facility-services/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'evs-facility-services/load-more' },
    { name: 'reskin', path: 'evs-facility-services/reskin' },
  ])
  .setAliasAdUnits('healthcare-it', [
    { name: 'lb1', templateName: 'LB', path: 'healthcare-it/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'healthcare-it/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'healthcare-it/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'healthcare-it/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'healthcare-it/load-more' },
    { name: 'reskin', path: 'healthcare-it/reskin' },
  ])
  .setAliasAdUnits('regulatory', [
    { name: 'lb1', templateName: 'LB', path: 'regulatory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'regulatory/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'regulatory/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'regulatory/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'regulatory/load-more' },
    { name: 'reskin', path: 'regulatory/reskin' },
  ]);

module.exports = config;