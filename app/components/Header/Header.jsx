import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.logo}>
                    <Image src="/logo.png" width={48} height={48} alt="Logo" />
                </div>
                <div className={styles.menuWrapper}>
                    <div className={styles.menu}>
                        <div className={styles.menuItem}>Home</div>
                        <div className={styles.menuItem}>
                            Courses{' '}
                            <span>
                                <svg
                                    width="12"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 0.5L6 5.5L11 0.5" stroke="#003366" />
                                </svg>
                            </span>
                            <div className={styles.dropdownMenu}>
                                <a href="#">Course 1</a>
                                <a href="#">Course 2</a>
                                <a href="#">Course 3</a>
                            </div>
                        </div>
                        <div className={styles.menuItem}>About</div>
                        <div className={styles.menuItem}>Contact us</div>
                    </div>
                    <div className={styles.loginBtn}>Login</div>
                </div>
            </div>
        </div>
    );
}
