import React from 'react';
import styles from '../styles/components/header.module.scss'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <div className={styles.header}>
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={styles.headerLogo}>技术胖</span>
          <span className={styles.headerTxt}>专注前端开发,每年100集免费视频。</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal' className={styles.antMenu}>
            <Menu.Item className={styles.antMenuItem} key='home' icon={<HomeOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item className={styles.antMenuItem} key='video' icon={<YoutubeOutlined />}>
              视频
            </Menu.Item>
            <Menu.Item className={styles.antMenuItem} key='life' icon={<SmileOutlined />}>
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
