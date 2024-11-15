'use client';
import { useState } from 'react';
import styles from './Faq.module.css';

export default function Faq() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aria, setAria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { name, email, aria });
    };

    const [isContentVisible, setContentVisible] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
    });

    const toggleContentVisibility = (index) => {
        setContentVisible((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>FAQ</div>
            <div className={styles.mainWrapper}>
                <div className={styles.contentWrapper}>
                    {[0, 1, 2, 3].map((index) => (
                        <div className={styles.contentItem} key={index}>
                            <div className={styles.contentTitleWrapper}>
                                <div className={styles.contentTitle}>
                                    Lorem ipsum dolor sit amet consectetur. Bibendum proin
                                </div>
                                <div
                                    className={styles.contentButton}
                                    onClick={() => toggleContentVisibility(index)}
                                >
                                    {isContentVisible[index] ? (
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="40"
                                                height="40"
                                                rx="20"
                                                fill="#003366"
                                            />
                                            <path
                                                d="M27 19H13C12.7348 19 12.4804 19.1054 12.2929 19.2929C12.1054 19.4804 12 19.7348 12 20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H27C27.2652 21 27.5196 20.8946 27.7071 20.7071C27.8946 20.5196 28 20.2652 28 20C28 19.7348 27.8946 19.4804 27.7071 19.2929C27.5196 19.1054 27.2652 19 27 19Z"
                                                fill="#FBFBFB"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="40"
                                                height="40"
                                                rx="20"
                                                fill="#003366"
                                            />
                                            <path
                                                d="M27 19H21V13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12C19.7348 12 19.4804 12.1054 19.2929 12.2929C19.1054 12.4804 19 12.7348 19 13V19H13C12.7348 19 12.4804 19.1054 12.2929 19.2929C12.1054 19.4804 12 19.7348 12 20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H19V27C19 27.2652 19.1054 27.5196 19.2929 27.7071C19.4804 27.8946 19.7348 28 20 28C20.2652 28 20.5196 27.8946 20.7071 27.7071C20.8946 27.5196 21 27.2652 21 27V21H27C27.2652 21 27.5196 20.8946 27.7071 20.7071C27.8946 20.5196 28 20.2652 28 20C28 19.7348 27.8946 19.4804 27.7071 19.2929C27.5196 19.1054 27.2652 19 27 19Z"
                                                fill="#FBFBFB"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {isContentVisible[index] && (
                                <div className={styles.contentDesc}>
                                    Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla
                                    in eget sit. Lacus iaculis sed mollis mi massa tortor
                                    scelerisque sed amet. Turpis et sit tincidunt eget. Dolor
                                    nisl fermentum cras erat nisl facilisis. Et.
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.formTitile}>Ask your question</div>
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
                        <textarea
                            type="text"
                            placeholder="Enter Your Question Here ....."
                            value={aria}
                            onChange={(e) => setAria(e.target.value)}
                            className={styles.inputAria}
                            rows="2"
                            required
                        />
                        <button type="submit" className={styles.button}>
                            Send your message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
