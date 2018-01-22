const demoDaysRoutes = require('./demo_days');
// demoDaysRoutes, nesting demoEntries

module.exports = (app) => {
  app.use(demoDaysRoutes.routes());
};