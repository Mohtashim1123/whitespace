import React from 'react';
import Footer from './Footer';
import Header from './Header';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
