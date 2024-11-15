import Image from 'next/image';
import styles from './Advantages.module.css';

export default function Advantages() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.title}>advantages</div>
                <div className={styles.itemsWrapper}>
                    <div className={styles.item}>
                        <Image src={'/itemImg1.svg'} alt="item1" width={64} height={64} />
                        <div className={styles.itemTitle}>Launch Your Coaching Career</div>
                        <div className={styles.itemDesc}>A comprehensive course track to ICF credentialing</div>
                    </div>
                    <div className={styles.item}>
                        <Image src={'/itemImg2.svg'} alt="item1" width={64} height={64} />
                        <div className={styles.itemTitle}>Coaching in the <br /> workplace</div>
                        <div className={styles.itemDesc}>Serve as a thought leader within your organization</div>
                    </div>
                    <div className={styles.item}>
                        <Image src={'/itemImg3.svg'} alt="item1" width={64} height={64} />
                        <div className={styles.itemTitle}>Continuing Coaching Education</div>
                        <div className={styles.itemDesc}>Beginner or a seasoned pro, you'll find a course right for you</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
