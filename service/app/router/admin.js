'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminAuth = app.middleware.adminauth();
  router.get('/admin/index', adminAuth, controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', adminAuth, controller.admin.main.getTypeInfo);
  router.post('/admin/addArticle', adminAuth, controller.admin.main.addArticle);
  router.post('/admin/updateArticle', adminAuth, controller.admin.main.updateArticle);
  router.get('/admin/getArticleList', adminAuth, controller.admin.main.getArticleList);
  router.get('/admin/delArticle/:id', adminAuth, controller.admin.main.delArticle);
  router.get('/admin/getArticleById/:id', adminAuth, controller.admin.main.getArticleById);
};
