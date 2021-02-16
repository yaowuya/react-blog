import styles from '../styles/components/author.module.scss'
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
  return (
    <div className={`${'commonBox'} ${styles.author}`}>
      <div>
        <Avatar size={100} src='/img/blogtouxiang.jpg' />
      </div>
      <div className={styles.authorIntroduction}>
        光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className={styles.account}></Avatar>
        <Avatar size={28} icon={<QqOutlined />} className={styles.account}></Avatar>
        <Avatar size={28} icon={<WechatOutlined />} className={styles.account}></Avatar>
      </div>
    </div >
  );
}

export default Author;