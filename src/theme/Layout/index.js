import React from 'react';
import Layout from '@theme-original/Layout';
import Plum from '@site/src/components/Plum/Plum';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function LayoutWrapper(props) {
  return (
    <>
      <BrowserOnly fallback={<>Loading...</>}>{() => <Plum />}</BrowserOnly>
      <Layout {...props} />
    </>
  );
}
