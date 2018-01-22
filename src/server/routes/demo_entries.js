const router = require('koa-router')({
  prefix: '/entries',
});

// Nested routes - old URL Route no longer needed, demo_days is nesting this route

const Entries = require('../db/models/entries');

router.get(`/`, async (ctx) => {
    console.log(ctx.params);
    try {
      const entries = await Entries.getAll(ctx.params.id);
      
      ctx.body = {
        entries: entries
      };
    } catch (err) {
      console.log(err)
    }
  });

  router.get(`/:entry_id`, async (ctx) => {
    try {
      const entry = await Entries.getById(ctx.params.id, ctx.params.entry_id);

      ctx.body = entry;
    } catch (err) {
      console.log(err)
    }
  });

  router.post('/', async (ctx) => {
    try {
      const entry = await Entries.add(ctx.request.body);
      if (entry) {
        ctx.status = 201;
        ctx.body = {
          entry: entry
        };
      } else {
        ctx.status = 400;
        ctx.body = {
          message: 'Something went wrong.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  });

module.exports = router;