'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminAuth = app.middleware.adminauth();
  router.get('/admin/index', adminAuth, controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
};
