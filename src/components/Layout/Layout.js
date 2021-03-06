import React from 'react';
import styles from './Layout.module.scss';

function Layout({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Layout;