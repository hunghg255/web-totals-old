import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import Comments from '@site/src/components/Comments';
import { useBlogPost } from '@docusaurus/theme-common/internal';

export default function FooterWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <Footer {...props} />
      <br />
      <br />
      {isBlogPostPage && <Comments />}
    </>
  );
}
