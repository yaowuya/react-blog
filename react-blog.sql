/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : react-blog

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 22/02/2021 18:01:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '123456');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NULL DEFAULT NULL,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `addTime` int(11) NULL DEFAULT NULL,
  `view_count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, 'React Hooks+Egg.js实战视频教程-技术胖Blog开发', '# P01:课程介绍和环境搭建\r\n  [ **M** ] arkdown  E [ **ditor** ] = **Mditor**\r\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已...\r\n**这是加粗的文字**\r\n*这是倾斜的文字*` \r\n***这是斜体加粗的文字*** \r\n~~这是加删除线的文字~~ \r\n\\`console.log(111)\\` \r\n# p02:来个Hello World 初始Vue3.0 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n*** \r\n# p03:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p04:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n#5 p05:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p06:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p07:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n\r\n\r\n`bbb`\r\n\r\n``` var a=11; ```\r\n\r\n\r\n```bash\r\nnpm run dev\r\n# or\r\nyarn dev\r\n```\r\n\r\n```html\r\n <div className={styles.detailedContent} dangerouslySetInnerHTML={{__html: html}}></div>\r\n```\r\n\r\n```js\r\n let a=1;\r\n```\r\n\r\n', 'React的基础和全家桶都已经讲完了，是时候把所有知识都串联起来，作一个真实项目了。 项目要用到的技术栈会很多，而且是真实项目，开发完成后，我会把自己的博客替换成新开发的，并且会把代码进行开源。 项目前台会使用`React`服务端渲染，并且全部使用Hooks语法来完成。 项目后台可能会使用Koa+mysql,后台将使用Koa的上层框架```egg.js```。\r\n\r\n本教程并没有课程大纲，一遍开发一遍讲述，但这样可以保证最真实的开发流程。如果你也想用React开发个人博客，那这个教程是你最好的选择。', 1613448595, 1000);
INSERT INTO `article` VALUES (2, 1, 'React服务端渲染框架Next.js入门(共12集)', '# P01:课程介绍和环境搭建\r\n  [ **M** ] arkdown  E [ **ditor** ] = **Mditor**\r\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已...\r\n**这是加粗的文字**\r\n*这是倾斜的文字*` \r\n***这是斜体加粗的文字*** \r\n~~这是加删除线的文字~~ \r\n\\`console.log(111)\\` \r\n# p02:来个Hello World 初始Vue3.0 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n*** \r\n# p03:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p04:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n#5 p05:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p06:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p07:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n\r\n\r\n`bbb`\r\n``` var a=11; ```\r\n', 'Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）。在没有Next.js的时候，用React开发需要配置很多繁琐的参数，如Webpack配置，Router配置和服务器端配置等....。如果需要作SEO，要考虑的事情就更多了，怎么样服务端渲染和客户端渲染保持一致就是一件非常麻烦的事情，需要引入很多第三方库。但有了Next.js，这些问题都解决了，使开发人员可以将精力放在业务逻辑上，从繁琐的配置中解放出来。', 1613362195, 38);
INSERT INTO `article` VALUES (3, 1, '50元加入小密圈 胖哥带你学一年', '# P01:课程介绍和环境搭建\r\n  [ **M** ] arkdown  E [ **ditor** ] = **Mditor**\r\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已...\r\n**这是加粗的文字**\r\n*这是倾斜的文字*` \r\n***这是斜体加粗的文字*** \r\n~~这是加删除线的文字~~ \r\n\\`console.log(111)\\` \r\n# p02:来个Hello World 初始Vue3.0 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n*** \r\n# p03:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p04:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n#5 p05:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p06:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n# p07:Vue3.0基础知识讲解 \r\n> aaaaaaaaa \r\n>> bbbbbbbbb \r\n>>> cccccccccc\r\n\r\n\r\n`bbb`\r\n``` var a=11; ```\r\n', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', 1613362195, 57);
INSERT INTO `article` VALUES (4, 2, 'React实战视频教程-技术胖Blog开发(更新04集)', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', 1613362195, 33);
INSERT INTO `article` VALUES (5, 3, 'React实战视频教程-技术胖Blog开发(更新04集)', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。', 1613362195, 33);
INSERT INTO `article` VALUES (7, 1, 'test-test', '`test`\n\n```js\nlet a=b\nb=1\n```', 'test-test', 1612108800, 1062);

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderNum` int(11) NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '视频教程', 1, 'YoutubeOutlined');
INSERT INTO `type` VALUES (2, '逼逼叨', 2, 'MessageOutlined');
INSERT INTO `type` VALUES (3, '快乐生活', 3, 'SmileOutlined');

SET FOREIGN_KEY_CHECKS = 1;
