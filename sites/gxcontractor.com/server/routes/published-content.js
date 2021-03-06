const webinars = require('@endeavor-business-media/package-shared/templates/published-content/webinars');
const events = require('@endeavor-business-media/package-shared/templates/published-content/events');
const videos = require('@endeavor-business-media/package-shared/templates/published-content/videos');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars, { title: 'Webinars' }); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
