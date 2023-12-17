import { useThemeConfig } from '@docusaurus/theme-common';
import { parseCodeBlockTitle, parseLanguage, parseLines } from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import CopyButton from '@theme/CodeBlock/CopyButton';
import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import styles from './styles.module.css';

import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerRenderWhitespace,
} from 'shikiji-transformers';
// import { rendererRich, transformerTwoSlash } from 'shikiji-twoslash';

// TODO: Replace with explicit versions in production
// import { transformerTwoSlash, rendererRich } from 'https://esm.sh/shikiji-twoslash@0.9.9/core';
import { codeToHtml } from 'shikiji';
// import { codeToHtml } from 'https://esm.sh/shikiji@latest';
// import { createStorage } from 'https://esm.sh/unstorage@latest';
// import indexedDbDriver from 'https://esm.sh/unstorage@latest/drivers/indexedb';
// import { createTwoSlashFromCDN } from 'https://esm.sh/twoslash-cdn@0.0.2';

// ============= Initialization =============

// An example using unstorage with IndexedDB to cache the virtual file system
// const storage = createStorage({
//   driver: indexedDbDriver({ base: 'twoslash-cdn' }),
// });

// const twoslash = createTwoSlashFromCDN({
//   storage,
//   compilerOptions: {
//     lib: ['esnext', 'dom'],
//   },
// });

// const transformerTwoSlash = createTransformerFactory(twoslash.runSync)({
//   renderer: rendererRich(),
// });

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
  return language?.toLowerCase();
}
export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();

  const [codeFormat, setCodeFormat] = useState();

  useLayoutEffect(() => {
    const language = normalizeLanguage(
      languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage,
    );


    const isTwoSlash =
    (language === 'typescript' || language === 'ts' || language === 'tsx') &&
    `${metastring}`.includes('twoslash');

    const transformers = [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationFocus(),
      transformerNotationErrorLevel(),
      transformerRenderWhitespace(),
    ];

    const init = async () => {
      if (typeof window === 'undefined') return;

      if (isTwoSlash) {
        await window.twoslash.prepareTypes(children);
        transformers.push(window.transformerTwoSlash);
      }

      const v = await codeToHtml(children, {
        lang: language,
        theme: 'vitesse-dark',
        transformers,
      });

      flushSync(() => {
        setCodeFormat(v);
      });
    };

    if (!isTwoSlash) {
      init()
    } else {
      const t = setInterval(() => {
        const isHave = window?.twoslash && window?.transformerTwoSlash;
        if (isHave) {
          init();
          clearInterval(t);
        }
      }, 16);
    }
  }, [children]);

  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage,
  );

  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });

  if (!codeFormat)
    return (
      <Container
      as='div'
      className={clsx(
        styles.blockCodeContainer,
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`,
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}

      <div className={styles.codeBlockContent}>
        <div
        style={{
          padding: '1rem',
        }}
        dangerouslySetInnerHTML={{ __html: '<div>Loading...</div>' }}></div>

        <span className={styles.blockLang}>{language}</span>

        <div className={styles.buttonGroup}>
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>
    </Container>
    );

  return (
    <Container
      as='div'
      className={clsx(
        styles.blockCodeContainer,
        blockClassName,
        language && !blockClassName.includes(`language-${language}`) && `language-${language}`,
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}

      <div className={styles.codeBlockContent}>
        <div dangerouslySetInnerHTML={{ __html: codeFormat }}></div>

        <span className={styles.blockLang}>{language}</span>

        <div className={styles.buttonGroup}>
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>
    </Container>
  );
}
