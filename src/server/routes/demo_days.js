const router = require('koa-router')({
  prefix: '/demos',
});

const entries = require('./demo_entries');
const { Demos } = require('../db/models');

router.get('/', async (ctx) => {
  try {
    const demos = await Demos.getAll();
    
    ctx.body = {
      demos: demos
    };
  } catch (err) {
    console.log(err)
  }
});

router.get(`/:id`, async (ctx) => {
  try {
    
    const demo = await Demos.getById(ctx.params.id);

    ctx.body = demo;
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (ctx) => {
  try {
    const demo = await Demos.add(ctx.request.body);
    if (demo) {
      ctx.status = 201;
      ctx.body = {
        demo: demo
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

// Nested Routes: Entries must have a Demo
router.use('/:id', entries.routes(), entries.allowedMethods());

module.exports = router;