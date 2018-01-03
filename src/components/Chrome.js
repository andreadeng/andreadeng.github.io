import React from 'react';
import { Link } from 'react-router';

import MarginBottomS from './MarginBottomS';
import Page from './Page';
import Header from './Header';
import { LinkHeader } from './Buttons';
import ScrollToTop from './ScrollToTop';

const Chrome = (props) => (
  <ScrollToTop>
  <Page padded='very'>
    <MarginBottomS text>
      <Link to='/'>
        <Header small link>
          <LinkHeader>Andrea Deng</LinkHeader>
        </Header>
      </Link>
    </MarginBottomS>
    {props.children}
  </Page>
  </ScrollToTop>
);

export default Chrome;
