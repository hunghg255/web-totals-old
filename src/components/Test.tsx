import Head from '@docusaurus/Head';
import React, { useEffect } from 'react';

interface IPropsTest {}

let loaded = false;

const Test = (props: IPropsTest) => {
  useEffect(() => {
    // code to inject script
    function injectScript() {
      const script = document.createElement('script');
      script.type = 'module';
      script.async = true;
      script.dataset.status = 'loading';
      script.innerHTML = `
import { createTransformerFactory, rendererRich } from 'https://esm.sh/shikiji-twoslash@0.9.9/core';
import { createStorage } from 'https://esm.sh/unstorage@latest';
import indexedDbDriver from 'https://esm.sh/unstorage@latest/drivers/indexedb';
import { createTwoSlashFromCDN } from 'https://esm.sh/twoslash-cdn@0.0.2';
const storage = createStorage({
  driver: indexedDbDriver({ base: 'twoslash-cdn' }),
})
window.twoslash = createTwoSlashFromCDN({
  storage,
  compilerOptions: {
    lib: ['esnext', 'dom'],
  },
});
window.transformerTwoSlash = createTransformerFactory(twoslash.runSync)({
  renderer: rendererRich(),
});
      `;
      document.body.append(script);

      const setDataStatus = (event) => {
        script.dataset.status = event.type === 'load' ? 'ready' : 'error';
      };

      script.addEventListener('load', setDataStatus);
      script.addEventListener('error', setDataStatus);
      loaded = true;
    }

    if (!loaded) {
      // code to inject script
      injectScript();
    }
  }, []);

  return <></>;
};

export default Test;
