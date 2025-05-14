import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link href="/">Home</Link></li>
          <li style={styles.navItem}><Link href="/about">About</Link></li>
          <li style={styles.navItem}><Link href="/projects">Projects</Link></li>
          <li style={styles.navItem}><Link href="/contact">Contact</Link></li>
          <li style={styles.navItem}><Link href="/work">Work</Link></li>
          <li style={styles.navItem}><Link href="/chat">Chat</Link></li>
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
    textDecoration: 'none',
    color: '#333',
    transition: 'color 0.3s ease',
  },
};

export default Header;
