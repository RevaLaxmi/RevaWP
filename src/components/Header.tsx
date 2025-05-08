import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link href="/">Reva Chauhan</Link>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link href="/about">About</Link></li>
          <li style={styles.navItem}><Link href="/projects">Projects</Link></li>
          <li style={styles.navItem}><Link href="/contact">Contact</Link></li>
          <li style={styles.navItem}><Link href="/work">Work</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'pink',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    gap: '20px',
  },
  navItem: {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#333',
    transition: 'color 0.3s ease',
  },
};

export default Header;
