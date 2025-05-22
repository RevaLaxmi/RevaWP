import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link href="/">HOME</Link></li>
          <li style={styles.navItem}><Link href="/about">ABOUT</Link></li>
          <li style={styles.navItem}><Link href="/projects">PROJECTS</Link></li>
          <li style={styles.navItem}><Link href="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center', // center horizontally
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent', // blends with background
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '16px',
    fontWeight: 600, // makes font thicker
    textDecoration: 'none',
    color: '#00000',
    transition: 'color 0.3s ease',
  },
};

export default Header;
