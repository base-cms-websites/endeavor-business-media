const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');

const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const whitePapers = require('../templates/website-section/white-papers');
const industryTemplate = require('../templates/website-section/industry');
const globalThoughtLeaders = require('../templates/website-section/global-thought-leaders');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(global-thought-leaders)', withWebsiteSection({
    template: globalThoughtLeaders,
    queryFragment,
  }));
  app.get('/:alias(white-papers)', withWebsiteSection({
    template: whitePapers,
    queryFragment,
  }));
  app.get('/:alias(industry)', withWebsiteSection({
    template: industryTemplate,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
