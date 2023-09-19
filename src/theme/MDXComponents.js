import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import StackBlitz from '../components/StackBlitz/StackBlitz';
import NpxConvert from '../components/NpxConvert/NpxConvert';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  stackblitz: StackBlitz,
  npxConvert: NpxConvert,
};
