'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.main.index);
  router.get('/default/getArticleList', controller.default.main.getArticleList);
};
