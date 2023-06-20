import React from 'react';
import Layout from '@theme-original/Layout';
import Plum from '@site/src/components/Plum/Plum';

export default function LayoutWrapper(props) {
  return (
    <>
      <Plum />
      <Layout {...props} />
    </>
  );
}
