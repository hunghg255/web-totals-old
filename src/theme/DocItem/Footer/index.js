import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/theme-common/internal';
import Comments from '@site/src/components/Comments';

export default function FooterWrapper(props) {
  const { frontMatter } = useDoc();
  console.log({
    frontMatter,
  });
  return (
    <>
      <Footer {...props} />
      <br />
      <br />
      {frontMatter?.comment && <Comments />}
    </>
  );
}
