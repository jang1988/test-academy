import Image from 'next/image';
import styles from './Welcome.module.css';

export default function Welcome() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.textBlock}>
                    <div className={styles.title}>
                        Welcome to <br /> Dickens Executive Coaching Academy
                    </div>
                    <div className={styles.desc}>
                        Your resource of choice for coaching education
                    </div>
                    <div className={styles.button}>Explore Courses</div>
                </div>

                <Image src="/welcomeImg.jpg" width={433} height={519} alt="welcome" />
            </div>
        </div>
    );
}
