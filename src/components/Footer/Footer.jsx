import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        color: '#2f3c3c',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      &copy; {new Date().getFullYear()} Slim Mom App created by{' '}
      <em> Madalina Gomei</em>
    </footer>
  );
};

export default Footer;
