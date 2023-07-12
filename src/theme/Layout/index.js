import React from 'react';
import Layout from '@theme-original/Layout';
import Plum from '@site/src/components/Plum/Plum';
import BrowserOnly from '@docusaurus/BrowserOnly';
import LogArt from '@site/src/components/LogArt/LogArt';

export default function LayoutWrapper(props) {
  return (
    <>
      <BrowserOnly fallback={<></>}>{() => <Plum />}</BrowserOnly>
      <BrowserOnly fallback={<></>}>{() => <LogArt />}</BrowserOnly>
      <Layout {...props} />
    </>
  );
}
