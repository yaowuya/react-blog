import styles from '../styles/components/advert.module.scss'
import {Image} from 'antd'

const Advert = () => {
    return (
        <div className={`${'commonBox'} ${styles.ad}`}>
            <div>
                <Image src="/img/flutter_ad2.jpg" alt="" width="100%"/>
            </div>
            <div>
                <Image src="/img/Vue_koa_ad1.jpg" alt="" width="100%"/>
            </div>
            <div>
                <Image src="/img/WechatIMG12.jpeg" alt="" width="100%"/>
            </div>
        </div>
    );
}

export default Advert;
