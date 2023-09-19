import React from 'react';

import Tabs from '@theme/Tabs';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';

const NpxConvert = ({ packageBinCli }) => {
  return (
    <>
      <Tabs>
        <TabItem value='npm' label='npx' default>
          <CodeBlock>npx {packageBinCli}</CodeBlock>
        </TabItem>
        <TabItem value='pnpm' label='pnpx'>
          <CodeBlock>pnpx {packageBinCli}</CodeBlock>
        </TabItem>
        <TabItem value='bun' label='bunx'>
          <CodeBlock>bunx {packageBinCli}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
};

export default NpxConvert;
