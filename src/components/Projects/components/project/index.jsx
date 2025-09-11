'use client';
import React from 'react';
import styles from './style.module.scss';

export default function Project({ index, title, service, manageModal }) {
  return (
    <div
      onMouseEnter={(e) =>
        manageModal(true, index, e.clientX, e.clientY)
      }
      onMouseLeave={(e) =>
        manageModal(false, index, e.clientX, e.clientY)
      }
      className={styles.project}
    >
      <h2 className="text-brand-text dark:text-brand-text-dark font-custom text-[20px] md:text-[40px]">
        {title}
      </h2>
      <p className="text-brand-text dark:text-brand-text-dark font-normal font-custom opacity-40 text-para">
        {service}
      </p>
    </div>
  );
}
