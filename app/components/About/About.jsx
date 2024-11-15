import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>About us</div>
                    <div className={styles.learnWrapper}>
                        <Image src={'/aboutBtn.svg'} alt="aboutBtn" width={40} height={40} />
                        <div className={styles.learnText}>Learn more</div>
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <Image src={'/aboutImg.jpg'} alt="aboutBtn" width={655} height={575} />
                    <div className={styles.itemsWrapper}>
                        <div className={styles.itemTop}>
                            <div className={styles.itemTitleTop}>
                                Hi, we’re Dickens Executive Coaching Academy
                            </div>
                            <div className={styles.itemDescTop}>
                                Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor
                                id proin rhoncus elit. Orci lacus pellentesque ultrices ut
                                aliquet non fusce faucibus dictumst. Massa sit aliquam quam
                                urna nam. Maecenas massa varius scelerisque pellentesque.
                                Vestibulum ut rhoncus iaculis eleifend. Euismod cras et tortor
                                at pellentesque duis cursus donec.
                            </div>
                        </div>
                        <div className={styles.itemsInner}>
                            <div className={styles.itemBottom}>
                                <div className={styles.itemTitleBottom}>5+</div>
                                <div className={styles.itemDescBottom}>
                                    years on the educational market
                                </div>
                            </div>
                            <div className={styles.itemBottom}>
                                <div className={styles.itemTitleBottom}>1000+</div>
                                <div className={styles.itemDescBottom}>
                                    successful graduates
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
