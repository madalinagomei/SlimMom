import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '100px' }}>
      &copy; {new Date().getFullYear()} Slim Mom App created by{' '}
      <em>Madalina Gomei</em>
    </footer>
  );
};

export default Footer;
