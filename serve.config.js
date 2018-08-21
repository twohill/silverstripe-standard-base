require('dotenv').config();

module.exports = {
  host: "0.0.0.0",
  port: process.env.WEBPACK_PORT,
  hotClient: {
    host: { client: "*", server: "0.0.0.0" }
  },
  add: (app, middleware) => {
    app.use((ctx, next) => {
      ctx.set('Access-Control-Allow-Origin', '*');
      return next();
    });
    middleware.webpack();
    middleware.content();
  },
};