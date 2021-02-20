'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.main.index);
  router.get('/default/getArticleList', controller.default.main.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.main.getArticleById);
  router.get('/default/getTypeInfo', controller.default.main.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.main.getListById);
};
