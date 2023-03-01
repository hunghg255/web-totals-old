import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comments(props) {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id='comments'
      repo='hunghg255/web-totals'
      repoId='R_kgDOILJQtQ'
      category='General'
      categoryId='DIC_kwDOILJQtc4CUkV7'
      mapping='url'
      term='Welcome to web totals'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme={colorMode}
      lang='en'
      loading='lazy'
    />
  );
}
