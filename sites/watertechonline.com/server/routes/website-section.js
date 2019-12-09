const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const queryFragment = require('../graphql/fragments/website-section-page');
const whitePapers = require('../templates/website-section/white-papers');
const industry = require('../templates/website-section/industry');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(white-papers)', withWebsiteSection({
    template: whitePapers,
    queryFragment,
  }));
  app.get('/:alias(industry)', withWebsiteSection({
    template: industry,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};