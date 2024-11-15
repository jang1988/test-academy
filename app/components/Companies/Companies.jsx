'use client';
import { useState } from 'react';
import styles from './Companies.module.css';

export default function Companies() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { name, email });
    };
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>
                        Companies, universities, directors and presidents
                    </div>
                    <div className={styles.desc}>
                        If you'd like to learn more information about our work with large
                        organizations, let's schedule a call.
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            required
                        />
                        <button type="submit" className={styles.button}>
                            Schedule a call
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
