const Koa = require('koa');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(bodyParser());
routes(app);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;