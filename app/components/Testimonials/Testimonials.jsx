'use client';
import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';

const Testimonials = () => {
    const testimonialData = [
        {
            image: '/person1.jpg',
            name: 'John Doe',
            role: 'CEO, Acme Inc.',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.',
            rating: 5,
        },
        {
            image: '/person2.jpg',
            name: 'Jane Smith',
            role: 'Marketing Manager, Widget Co.',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.',
            rating: 4,
        },
        {
            image: '/person1.jpg',
            name: 'John Doe',
            role: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.',
            rating: 3,
        },
        {
            image: '/person2.jpg',
            name: 'Jane Smith',
            role: 'Marketing Manager, Widget Co.',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.',
            rating: 2,
        },
       
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + testimonialData.length) % testimonialData.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonialData.length);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.title}>Testimonials</div>
                <div className={styles.slider}>
                    <div className={styles.slideWrapper}>
                        <div className={styles.slide}>
                            <Image
                                src={testimonialData[currentIndex].image}
                                alt={testimonialData[currentIndex].name}
                                width={200}
                                height={225}
                            />
                            <div className={styles.contentWrapper}>
                                <div className={styles.name}>
                                    {testimonialData[currentIndex].name}
                                </div>
                                <div className={styles.role}>
                                    {testimonialData[currentIndex].role}
                                </div>
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`${styles.star} ${
                                                index < testimonialData[currentIndex].rating
                                                    ? styles.filled
                                                    : ''
                                            }`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.text}>
                                    {testimonialData[currentIndex].text}
                                </div>
                            </div>
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={
                                    testimonialData[
                                        (currentIndex + 1) % testimonialData.length
                                    ].image
                                }
                                alt={
                                    testimonialData[
                                        (currentIndex + 1) % testimonialData.length
                                    ].name
                                }
                                width={200}
                                height={225}
                            />
                            <div className={styles.contentWrapper}>
                                <div className={styles.name}>
                                    {
                                        testimonialData[
                                            (currentIndex + 1) % testimonialData.length
                                        ].name
                                    }
                                </div>
                                <div className={styles.role}>
                                    {
                                        testimonialData[
                                            (currentIndex + 1) % testimonialData.length
                                        ].role
                                    }
                                </div>
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`${styles.star} ${
                                                index <
                                                testimonialData[
                                                    (currentIndex + 1) % testimonialData.length
                                                ].rating
                                                    ? styles.filled
                                                    : ''
                                            }`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.text}>
                                    {
                                        testimonialData[
                                            (currentIndex + 1) % testimonialData.length
                                        ].text
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <button
                            className={`${styles.button} ${styles.prev}`}
                            onClick={handlePrevClick}
                        >
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 1L1 6L6 11" stroke="#FBFBFB" />
                            </svg>
                        </button>
                        <div className={styles.dots}>
                            {testimonialData.map((_, index) => (
                                <span
                                    key={index}
                                    className={`${styles.dot} ${
                                        index === currentIndex
                                            ? styles.active
                                            : styles.inactive
                                    }`}
                                ></span>
                            ))}
                        </div>

                        <button
                            className={`${styles.button} ${styles.next}`}
                            onClick={handleNextClick}
                        >
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L6 6L1 11" stroke="#FBFBFB" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
