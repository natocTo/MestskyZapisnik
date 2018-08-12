import galite from "ga-lite";

export default ({ app }) => {
  if (app.context.isDev) return;

  galite("create", "UA-123666309-1", "auto");

  app.router.afterEach(to => {
    galite("set", "page", to.fullPath);
    galite("send", "pageview");
  });
};
