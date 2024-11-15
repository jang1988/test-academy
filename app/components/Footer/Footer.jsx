import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.logoWrapper}>
                <Image src="/logo.png" width={48} height={48} alt="Logo" /></div>
                <div className={styles.rights}>© 2024 Dickens Consulting Group, LLC</div>
                <div className={styles.footerMenu}>
                    <div className={styles.menuItem}>Course</div>
                    <div className={styles.menuItem}>About</div>
                    <div className={styles.menuItem}>Contact</div>
                </div>
            </div>
        </div>
    );
}
